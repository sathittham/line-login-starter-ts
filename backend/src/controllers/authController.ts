import axios from 'axios';
import dotenv from 'dotenv';
import {LINE_AUTH_URL,
  LINE_TOKEN_URL,
  LINE_VERIFY_URL,
  LINE_PROFILE_URL,
} from '../constants/lineApiUrls';
dotenv.config();

const LINE_CLIENT_ID = process.env.LINE_CLIENT_ID;
const LINE_CLIENT_SECRET = process.env.LINE_CLIENT_SECRET;
const LINE_REDIRECT_URI = process.env.LINE_REDIRECT_URI;

class AuthController {
    async login(req, res) {
        const authUrl = `${LINE_AUTH_URL}?response_type=code&client_id=${LINE_CLIENT_ID}&redirect_uri=${encodeURIComponent(LINE_REDIRECT_URI)}&state=YOUR_STATE&scope=profile%20openid`;
        res.redirect(authUrl);
    }

    async handleSuccess(req, res) {
        const { code } = req.query;
        try {
            const tokenRes = await axios.post(LINE_TOKEN_URL, null, {
                params: {
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: LINE_REDIRECT_URI,
                    client_id: LINE_CLIENT_ID,
                    client_secret: LINE_CLIENT_SECRET,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const { access_token } = tokenRes.data;

            await axios.get(LINE_VERIFY_URL, {
                params: { access_token }
            });

            const profileRes = await axios.get(LINE_PROFILE_URL, {
                headers: { Authorization: `Bearer ${access_token}` }
            });

            res.redirect(`/success?name=${encodeURIComponent(profileRes.data.displayName)}&picture=${encodeURIComponent(profileRes.data.pictureUrl)}`);
        } catch (error) {
            res.redirect('/error');
        }
    }

    async handleError(req, res) {
        res.redirect('/error');
    }
}

export default new AuthController();