import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">GoGetFit</h1>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Workouts</a>
        <a href="#" className="hover:underline">Progress</a>
        <a href="#" className="hover:underline">Login</a>
      </div>
    </nav>
  );
}

export default Navbar; 
