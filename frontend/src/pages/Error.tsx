import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
    <h1 className="text-2xl font-bold mb-2 text-red-600">Login Failed</h1>
    <p className="mb-6 text-gray-700">There was an error during LINE login.</p>
    <Link
      to="/"
      className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-base font-medium transition"
    >
      Go back to Login
    </Link>
  </div>
);

export default Error;