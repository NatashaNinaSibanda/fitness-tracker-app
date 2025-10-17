import React from "react";

function SignUpPage() {
    return (
     <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

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
    
        
