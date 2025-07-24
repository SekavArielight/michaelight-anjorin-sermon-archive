import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-center px-6">
      <h1 className="text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        404
      </h1>
      <p className="text-2xl sm:text-3xl font-semibold mb-2">Lost in the Void?</p>
      <p className="text-gray-400 max-w-xl mb-6">
        Seems like the page you're chasing doesn't exist in this realm.  
        Maybe you followed a glitch in the matrix?
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition duration-300 ease-in-out"
      >
        🚀 Back to Reality
      </Link>
    </div>
  );
};

export default NotFoundPage;
