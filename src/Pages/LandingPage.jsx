import React from "react";
import { Link } from "react-router-dom"; 
import heroBg from "../assets/Hero-bg.jpg";

function LandingPage() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(2.5)",
      }}
    >
      <div className="position:absolute inset-0 bg-white/90"></div>

      <main className="relative z-10 text-center px-8">
        <h2 className="text-10xl sm:text-10xl font-bold mb-4">
          Your Fitness Journey Starts Here
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Track your workouts, monitor progress, take up challenges and reach your
          goals with GoGetFit.
          Make Every Workout Count.
          Fitness Tracking Made Effortless.
          From Goals to Gains, We’ve Got You Covered
        </p>
        <Link
         to="/signup"
         className="px-6 py-3 bg-black-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
 > 
         Get Started
        </Link>
      </main>
    </div>
  );
}

export default LandingPage;