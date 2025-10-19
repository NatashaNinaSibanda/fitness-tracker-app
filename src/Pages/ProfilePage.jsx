import React from "react"; 

function ProfilePage() {
    return (
      <div className="bg-transparent backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>

        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center max-w-md w-full">
            <div className="flex flex-col items-center mb-4">
                <img src="src/assets/ProfilePicture.webp" 
                alt="Profile" 
                className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover shadow-lg mb-4"
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
