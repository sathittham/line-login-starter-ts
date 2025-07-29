# LINE Login v2.1 Demo App

This project is a full-stack web application demonstrating the LINE Login v2.1 workflow. It features a Node.js (TypeScript) backend and a React (Vite, TypeScript) frontend styled with Tailwind CSS.

The application provides a complete, responsive user flow including a login page with the official LINE Login button, a success page for authenticated users, and an error page.

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
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   ├── Login.tsx
│   │   │   ├── Success.tsx
│   │   │   └── Error.tsx
│   │   └── types
│   │       └── index.ts
│   ├── assets
│   │   ├── btn_login_base.png
│   │   ├── btn_login_hover.png
│   │   └── btn_login_press.png
│   ├── package.json
│   └── tsconfig.json
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
3. Start the backend server:
   ```
   npm start
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

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Use the login page to authenticate with LINE (the button follows [LINE's official guidelines](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button)).
- After successful login, you will be redirected to the success page.
- If there is an error during the login process, you will be redirected to the error page.

## License

This project is licensed under the