import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-purple-900 shadow-lg">
      <h1 className="text-2xl font-bold text-neonBlue">GoGetFit</h1>
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-white hover:text-neonGreen transition">
          Home
        </Link>
        <Link to="/dashboard" className="text-white hover:text-neonGreen transition">
          Dashboard
        </Link>
        <Link to="/profile" className="text-white hover:text-neonGreen transition">
          Profile
        </Link>
        <Link to="/about" className="text-white hover:text-neonGreen transition">
          About Us
        </Link>
        <Link to="/login" className="text-white hover:text-neonGreen transition">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 
