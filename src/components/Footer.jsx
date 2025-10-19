import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-8 grid grid-colos-1 md:grid-cols-3 gap-8">
      </div>
      <h3 className="text-xl font-bold mb-4">GoGetFit</h3>
      <p>Igniting your fitness journey, one step at a time.</p>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
          </ul>
      </div>

      <div>
        <h3 className="text-xl text-center font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <Link to="#" className="hover:underline"><FaFacebook /></Link>
          <Link to="#" className="hover:underline"><FaTwitter /></Link>
          <Link to="#" className="hover:underline"><FaInstagram /></Link>
          <Link to="#" className="hover:underline"><FaLinkedinIn /></Link>
        </div>
      </div>

      <div className="mt-8 border-t border-purple-600 pt-6 text-center text-gray-300">
        &copy; {new Date().getFullYear()} GoGetFit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 