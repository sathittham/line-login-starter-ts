# LINE Login App Backend

This is the backend for the LINE Login App, built with Node.js and TypeScript. It handles LINE Login v2.1 authentication, token verification, and user profile retrieval.

## Features

- Redirects users to LINE Login authorization
- Handles LINE OAuth2 callback
- Exchanges authorization code for access token
- Verifies access token
- Retrieves user profile information
- Redirects to frontend with user info or error

## Project Structure

```
backend/
├── src/
│   ├── app.ts
│   ├── controllers/
│   │   └── authController.ts
│   ├── constants/
│   │   └── lineApiUrls.ts
│   └── routes/
│       └── authRoutes.ts
├── package.json
├── tsconfig.json
├── .env.example
```

## Environment Variables

Create a `.env.local` for development or `.env.production` for production.  
See `.env.example` for required variables:

```
LINE_CLIENT_ID=your_line_client_id
LINE_CLIENT_SECRET=your_line_client_secret
LINE_REDIRECT_URI=http://localhost:3000/api/auth/callback
```

## Scripts

- `npm run dev` — Start in development mode with `.env.local`
- `npm start` — Start in production mode with `.env.production`
- `npm run build` — Compile TypeScript

## Usage

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm run dev
   ```
3. Visit `http://localhost:3001/api/auth/login` to start LINE Login flow.

## API Endpoints

- `GET /api/auth/login` — Redirects to LINE Login
- `GET /api/auth/callback` — Handles LINE callback, verifies token, fetches profile
- `GET /api/auth/error` — Redirects to error page

##