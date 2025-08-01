# LINE Login v2.1 Demo App

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
│   │   ├── controllers
│   │   │   └── authController.ts
│   │   ├── routes
│   │   │   └── authRoutes.ts
│   │   └── types
│   │       └── index.ts
│   ├── constants
│   │   └── lineApiUrls.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
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
   cp .env.example .env.local
   # Edit .env.local with your LINE credentials and redirect URI
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

- Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).
- Use the login page to authenticate with LINE (the button follows [LINE's official guidelines](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button)).
- After successful login, you will be redirected to the main page showing your LINE profile.
- If there is an error during the login process, you will be redirected to the error page.
- You can logout and return to the login page.

## License

This project is licensed under the MIT license.