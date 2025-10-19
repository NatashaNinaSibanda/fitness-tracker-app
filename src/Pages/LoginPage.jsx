import React from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/dashboard");
    };

return (
 <section className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          Don’t have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
} 


export default LoginPage;
