import React from 'react';
import btnWide from '../assets/btn_login_base.png';
import btnHover from '../assets/btn_login_hover.png';
import btnPress from '../assets/btn_login_press.png';

const LINE_LOGIN_URL = 'https://access.line.me/oauth2/v2.1/authorize?...';

const Login: React.FC = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-center"
    >
      <h1 className="mb-8 text-2xl font-bold text-black">Login with LINE</h1>
      <a
        href={LINE_LOGIN_URL}
        className="group relative inline-block rounded-lg bg-white p-3"
      >
        {/* Base image */}
        <img
          src={btnWide}
          alt="Log in with LINE"
          className="block h-10 w-auto"
        />
        {/* Hover image - shown on hover, hidden otherwise */}
        <img
          src={btnHover}
          alt=""
          className="absolute top-3 left-3 hidden h-10 w-auto group-hover:block"
        />
        {/* Active image - shown on active, hidden otherwise */}
        <img
          src={btnPress}
          alt=""
          className="absolute top-3 left-3 hidden h-10 w-auto group-active:block"
        />
      </a>
    </div>
  );
};

export default Login;