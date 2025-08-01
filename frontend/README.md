# LINE Login App Frontend

This is the frontend for the LINE Login App, built with React, Vite, and TypeScript. It provides a user interface for LINE Login v2.1, including login, success, error, and logout pages.

## Features

- Responsive login page with official LINE Login button (guideline compliant)
- Displays user profile (name and photo) after successful login
- Error page with link to retry login
- Logout functionality and page
- Routing with React Router

## Project Structure

```
frontend/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Main.tsx
│   │   ├── Error.tsx
│   │   └── Logout.tsx
│   ├── assets/
│   │   ├── btn_login_base.png
│   │   ├── btn_login_hover.png
│   │   └── btn_login_press.png
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Getting Started

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000` (or the port shown in your terminal).

## Usage

- Click the LINE Login button to authenticate.
- On success, your name and profile photo will be displayed.
- Use the logout button to log out and return to the login page.
- If login fails, the error page will provide a link to retry.

## Customization

- Update the LINE Login URL in `Login.tsx` to match your backend endpoint.
- Replace button images in `src/assets/` with official LINE images if needed.