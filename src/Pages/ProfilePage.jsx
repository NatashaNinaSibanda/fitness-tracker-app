import React from "react"; 

function ProfilePage() {
    return (
      <div className="bg-gray-900 min-h-screen p-6 flex-col items-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center border-t-4 border-neonBlue">
            <div className="flex flex-col items-center mb-6">
                <img src="src/assets/ProfilePicture.webp" 
                alt="Profile" 
                className="w-32 h-32 rounded-full mb-4 border-4 border-neonPurple" 
                />
                <h2 className="text-3xl font-semibold text-neonBlue mb-2">Natasha Sibanda</h2>
                <p className="text-gray-300 mb-4">Email: natasha@example.com</p>
            </div>

            <div className="space-y-4 text-gray-300">
                <p><strong>Bio:</strong> Fitness enthusiast, Fitness Guru, Fitness Baddie!</p>
                <p><strong>Fitness Goal:</strong> Inspire others through fitness. Stay active 24/7.</p>
                <p><strong>Target Weight:</strong> 50 kg</p>
                <p><strong>Daily Goal:</strong> 10,000 steps, 3 workouts.</p>
            </div>

        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Edit Profile
        </button>
        </div> 
      </div>
    );
}

export default ProfilePage; 
