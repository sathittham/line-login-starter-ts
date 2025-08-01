import React from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  picture: string;
}

interface MainProps {
  user: User;
}

const Main: React.FC<MainProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens, call API)
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-2xl font-bold mb-2 text-black">Login Successful!</h1>
      <p className="mb-6 text-gray-700">You have logged in with LINE.</p>
      <div className="flex flex-col items-center mb-8">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-20 h-20 mb-4"
        />
        <h2 className="text-lg font-semibold text-black">{user.name}</h2>
      </div>
      <button
        className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-base font-medium transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Main;