import React from "react";
import { useNavigate, Link } from "react-router-dom";
import AboutLogIn from "../assets/AboutLogIn.jpg";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${AboutLogIn})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-70"></div>
      </div>

      
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-black bg-opacity-70 p-10 rounded-3xl shadow-2xl w-full max-w-md text-white">
          <h2 className="text-4xl font-extrabold text-neonBlue mb-6 text-center drop-shadow-neon neon-glow animate-flicker">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-neonBlue text-black py-3 rounded-lg font-bold hover:bg-neonGreen transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-300 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-neonYellow font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
