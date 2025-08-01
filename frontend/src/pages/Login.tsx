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
      <a
        href={LINE_LOGIN_URL}
        className="group relative inline-block rounded-lg bg-white p-3"
        style={{ width: 'auto', height: '40px' }} // Ensure container height matches image
      >
        {/* Base image */}
        <img
          src={btnWide}
          alt="Log in with LINE"
          className="absolute top-0 left-0 h-10 w-auto group-hover:hidden group-active:hidden"
          style={{ zIndex: 1 }}
        />
        {/* Hover image */}
        <img
          src={btnHover}
          alt=""
          className="absolute top-0 left-0 h-10 w-auto hidden group-hover:block group-active:hidden"
          style={{ zIndex: 2 }}
        />
        {/* Active image */}
        <img
          src={btnPress}
          alt=""
          className="absolute top-0 left-0 h-10 w-auto hidden group-active:block"
          style={{ zIndex: 3 }}
        />
</a>
    </div>
  );
};

export default Login;