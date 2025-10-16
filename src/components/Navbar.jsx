import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 bg-white shadow-md">
      <h1 className="text-xl font-bold">GoGetFit</h1>
      <div className="flex items-center space-10 space-x-6 space-x-12">
        <a href="#" className="text-black hover:underline">Home</a>
        <a href="#" className="text-black hover:underline">Workouts</a>
        <a href="#" className="text-black hover:underline">Progress</a>
        <a href="#" className="text-black hover:underline">About Us</a>
        <a href="#" className="text-black hover:underline">Login</a>
      </div>
    </nav>
  );
}

export default Navbar; 
