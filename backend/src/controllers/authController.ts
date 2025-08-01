import { Request, Response } from "express";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import crypto from "crypto";
import config from "../config";
import logger from "../utils/logger";
import { LINE_AUTH_URL, LINE_TOKEN_URL } from "../constants/lineApiUrls";
import { z } from "zod";

interface LineIdToken {
  name: string;
  picture: string;
  sub: string; // User ID
}

// Define schemas outside the class to avoid re-creation on every request
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Invalid email address"),
});

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const querySchema = z.object({
  code: z.string(),
  state: z.string(),
});

class AuthController {
  async register(req: Request, res: Response) {
    // Validate request body using zod
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
      logger.error("Invalid registration data:", result.error.format());
      return res.status(400).json({ errors: result.error.format() });
    }

    const { username, password, email } = result.data;

    // TODO: Check if user already exists in your database
    // TODO: Hash the password before saving (e.g., using bcrypt)
    // TODO: Save the user to your database

    // For demonstration, just return success
    logger.info(`User registered: ${username} (${email})`);
    return res.status(201).json({ message: "User registered successfully." });
  }

  async getUserById(req: Request, res: Response) {
    const result = paramsSchema.safeParse(req.params);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.format() });
    }
    const { id } = result.data;

    // Continue with logic, e.g., fetch user from DB
    // ...
    res.json({ id });
  }

  async login(req: Request, res: Response) {
    // Generate a secure, random state token and store it in the session
    const state = crypto.randomBytes(16).toString("hex");
    req.session.state = state;

    const scope = "profile openid";

    const queryParams = new URLSearchParams({
      response_type: "code",
      client_id: config.line.clientId,
      redirect_uri: config.line.redirectUri,
      state,
      scope,
    });

    const authUrl = `${LINE_AUTH_URL}?${queryParams.toString()}`;
    res.redirect(authUrl);
  }

  async handleSuccess(req: Request, res: Response) {
    // Validate query parameters using zod
    const result = querySchema.safeParse(req.query);

    if (!result.success) {
      logger.error(
        "Invalid query parameters from LINE callback:",
        result.error.format()
      );
      return res.redirect(`${config.frontend.errorUrl}?message=InvalidQuery`);
    }

    const { code, state } = result.data;
    const sessionState = req.session.state;

    // CSRF check: Validate the state parameter
    if (!state || state !== sessionState) {
      logger.error("Invalid state parameter. CSRF attack suspected.");
      return res.redirect(`${config.frontend.errorUrl}?message=InvalidState`);
    }

    try {
      const tokenParams = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: config.line.redirectUri,
        client_id: config.line.clientId,
        client_secret: config.line.clientSecret,
      });

      const tokenRes = await axios.post(LINE_TOKEN_URL, tokenParams, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const { id_token } = tokenRes.data;

      if (!id_token) {
        throw new Error("ID token not found in LINE response.");
      }

      // Decode the ID token to get user profile information.
      // For production, you should also verify the token's signature against LINE's public keys.
      const decodedToken = jwtDecode<LineIdToken>(id_token);
      const { name, picture } = decodedToken;

      const successParams = new URLSearchParams({ name, picture });

      // Redirect to the frontend success page with user info
      res.redirect(`${config.frontend.successUrl}?${successParams.toString()}`);
    } catch (error: any) {
      logger.error(
        "Error during LINE login callback:",
        error.response?.data || error.message
      );
      res.redirect(config.frontend.errorUrl);
    }
  }

  async handleError(req: Request, res: Response) {
    // This endpoint can be used for generic auth errors
    res.redirect(`${config.frontend.errorUrl}?message=AuthenticationFailed`);
  }
}

export default new AuthController();
