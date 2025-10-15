import React from "react";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to GoGetFit</h1>
      <p className="text-lg text-gray-700 mb-8">
        Track your workouts, monitor progress, take up challenges, and achieve your fitness goals!
      </p>
      <div className="flex gap-4">
        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
        <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
          Log In
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
