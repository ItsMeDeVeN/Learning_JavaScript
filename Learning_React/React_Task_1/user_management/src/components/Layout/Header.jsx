import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <header className="bg-gradient-to-t from-white to-slate-400  shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black">
          My Blog
        </Link>
        <div>
          <button
            onClick={handleLogin}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;