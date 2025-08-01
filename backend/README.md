# LINE Login App Backend

This is the backend for the LINE Login App, built with Node.js, Express, and TypeScript. It handles the LINE Login v2.1 authentication flow, provides user registration, and serves user data.

## Features

- **LINE Login**: Full OAuth 2.0 flow for LINE Login v2.1.
- **CSRF Protection**: Uses a `state` parameter and session to prevent Cross-Site Request Forgery.
- **User Registration**: `POST /api/auth/register` endpoint for creating new users.
- **Validation**: Uses Zod for robust request validation (body, params, query).
- **Configuration**: Type-safe environment variable management with Zod.
- **Logging**: Structured logging with Winston.
- **API Health Check**: Simple `/api/health` endpoint to monitor service status.

## Project Structure

```
backend/
├── src/
│   ├── app.ts
│   ├── config/
│   │   └── index.ts
│   ├── controllers/
│   │   └── authController.ts
│   ├── constants/
│   │   └── lineApiUrls.ts
│   ├── routes/
│   │   └── authRoutes.ts
│   ├── types/
│   │   └── express-session.d.ts
│   └── utils/
│       └── logger.ts
├── package.json
├── tsconfig.json
├── .env
├── .env.example
```

## Environment Variables

Create a `.env` file in the backend folder.  
See `.env.example` for required variables:

```
LINE_CLIENT_ID=your_line_client_id
LINE_CLIENT_SECRET=your_line_client_secret
LINE_REDIRECT_URI=http://localhost:5000/api/auth/line/callback
SESSION_SECRET=a_long_random_string_for_securing_sessions
PORT=5000
FRONTEND_SUCCESS_URL=http://localhost:5173/success
FRONTEND_ERROR_URL=http://localhost:5173/error
```

## Scripts

- `npm run dev` — Start in development mode with `.env`
- `npm start` — Start compiled JS from `dist/`
- `npm run build` — Compile TypeScript
- `npm run clean` — Remove `dist/` folder

## Usage

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm run dev
   ```
3. Visit `http://localhost:5000/api/auth/line/login` to start LINE Login flow.

## API Endpoints

- `GET /api/auth/line/login` — Redirects to LINE Login
- `GET /api/auth/line/callback` — Handles LINE callback, verifies token, fetches profile
- `GET /api/auth/line/error` — Redirects to error page
- `POST /api/auth/register` — Registers a new user
- `GET /api/auth/:id` — Fetch user by ID
- `GET /api/health` — Health check

## Notes

- All request validation is handled with Zod.
- Session type augmentation is in `src/types/express-session.d.ts`.
- Logging is handled by Winston (`src/utils/logger.ts`).
- Environment variables are validated at startup.