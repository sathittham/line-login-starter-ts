# LINE Login v2.1 Starter App

This project is a full-stack web application demonstrating the LINE Login v2.1 workflow. It features a Node.js (TypeScript) backend and a React (Vite, TypeScript) frontend styled with Tailwind CSS.

The application provides a complete, responsive user flow including:
- A login page with the official LINE Login button (guideline compliant and responsive)
- A success page displaying authenticated user information (name and profile photo)
- An error page with a link to retry login
- Logout functionality

## Project Structure

```
line-login-2.1-starter-2025
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── controllers
│   │   │   └── authController.ts
│   │   ├── routes
│   │   │   └── authRoutes.ts
│   │   ├── constants
│   │   │   └── lineApiUrls.ts
│   │   ├── types
│   │   │   └── express-session.d.ts
│   │   └── utils
│   │       └── logger.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── .env
├── frontend
│   ├── src
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   ├── Login.tsx
│   │   │   ├── Main.tsx
│   │   │   ├── Error.tsx
│   │   │   └── Logout.tsx
│   ├── assets
│   │   ├── btn_login_base.png
│   │   ├── btn_login_hover.png
│   │   └── btn_login_press.png
│   ├── index.css
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Create your environment file (see `.env.example` for required variables):
   ```
   cp .env.example .env
   # Edit .env with your LINE credentials, session secret, and frontend URLs
   ```
4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm run dev
   ```

### Usage

- Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).
- Use the login page to authenticate with LINE (the button follows [LINE's official guidelines](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button)).
- After successful login, you will be redirected to the main page showing your LINE profile.
- If there is an error during the login process, you will be redirected to the error page.
- You can logout and return to the login page.

## Environment Variables

Create a `.env` file in the `backend` folder.  
See `.env.example` for required variables:

```
LINE_CLIENT_ID=your_line_client_id
LINE_CLIENT_SECRET=your_line_client_secret
LINE_REDIRECT_URI=http://localhost:5000/api/auth/line/callback
SESSION_SECRET=your_session_secret
PORT=5000
FRONTEND_SUCCESS_URL=http://localhost:5173/success
FRONTEND_ERROR_URL=http://localhost:5173/error
```

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

## License

This project is licensed under the MIT license.