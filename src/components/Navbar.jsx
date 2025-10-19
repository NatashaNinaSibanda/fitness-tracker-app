import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 bg-purple-500 shadow-md">
      <h1 className="text-xl font-bold text-white">GoGetFit</h1>
      <div className="flex items-center space-10 space-x-6 space-x-18">
        <Link to="/" className="text-black hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="text-black hover:underline">
          Dashboard
        </Link>
        <Link to="/profile" className="text-black hover:underline">
          Profile
        </Link>
        <Link to="/about" className="text-black hover:underline">
          About Us
        </Link>
        <Link to="/login" className="text-black hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 
