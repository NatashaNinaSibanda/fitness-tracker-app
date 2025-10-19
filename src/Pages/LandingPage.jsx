import React from "react";
import { Link } from "react-router-dom"; 
import Background from "../assets/Background.jpg";

function LandingPage() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex flex-col justify-center text-white"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7)",
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

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
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-600 transition"
          >
            Get Started
          </Link>
        </main>
      </div>

      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">Why Choose GoGetFit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <img src="src/assets/hero_home@2x.jpg" alt="Workout Logging" className="w-full h-auto" />
              <h3 className="text-xl font-semibold mt-4">Workout Logging</h3>
              <p>Simply log your workouts and track your exercises, weights and many more with our Fitness Tracker App.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-xl shadow-lg">
              <img src="src/assets/feature-2025-09-13.jpg" alt="Progress Tracking" className="w-full h-auto" />
              <h3 className="text-xl font-semibold mt-4">Progress Tracking</h3>
              <p>Monitor your progress over time with detailed charts, analytics and insights.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-xl shadow-lg">
              <img src="src/assets/Bicycle-Crunch-endomondo-1.jpg" alt="Bicycle Crunch" className="w-full h-auto" />
              <h3 className="text-xl font-semibold mt-4">Bicycle Crunch</h3>
              <p>Engage your core and improve your stability with this effective exercise. Cycling is one the best challenges that our people take up.</p>
            </div>
          </div>
        </div>
        </section>
       <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg text-center">
              <img src={("src/assets/Ntombi.jpeg")} alt="User 1" className="w-20 h-20 rounded-full mx-auto mb-4"/>
              <p className="italic mb-2">"GoGetFit helped me finally reach my fitness goals!"</p>
              <p className="font-semibold">– Ntombi M.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg text-center">
              <img src={("src/assets/Kane.jpeg")} alt="User 2" className="w-20 h-20 rounded-full mx-auto mb-4"/>
              <p className="italic mb-2">"I love tracking my progress and seeing real results."</p>
              <p className="font-semibold">– Kane D.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg text-center">
              <img src={("src/assets/Slyvia.jpeg")} alt="User 3" className="w-20 h-20 rounded-full mx-auto mb-4"/>
              <p className="italic mb-2">"The challenges keep me motivated every single day."</p>
              <p className="font-semibold">– Slyvia P.</p>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-purple-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Fitness Journey Today!</h2>
        <p className="text-lg mb-8">Join hundereds of others achieving their goals with GoGetFit.</p>
        <Link to="/signup" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-200 transition">
          Get Started Today
        </Link>
      </section>
    </>
  );
}

export default LandingPage;