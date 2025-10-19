import React from "react";
import AboutUs3 from "../assets/AboutUs3.jpg"; 

function SignUpPage() {
    return (
     <section 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 bg-center relative brightness-150"
      style={{ backgroundImage: `url(${AboutUs3})`,
      backgroundSize: "contain",
    }}
      >
    
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 bg-white/90 p-8 rounded-2xl shadow-md w-full max-w-sm">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Create Your Account</h2>

            <form className="space-y-6">
                <div>
                    <label className="block text-black-700 mb-2">Full Name</label>
                    <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <div>
                    <label className="block text-black-700 mb-2">Email Address</label>
                     <input 
                    type="text" 
                    placeholder="Enter your email"
                    className="w-full px-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <div>
                    <label className="block text-black-700 mb-2">Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full px-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                <button
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                    Sign Up
                </button>
            </form>

            <p className="text-center text-blue-600 mt-4">
                Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
            </p>
        </div> 
     </section>
    );
}

export default SignUpPage; 
    
        
