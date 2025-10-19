import React from "react"; 

function ProfilePage() {
    return (
      <div className="min-h-screen bg-gray-50 flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
                <img src="../assets/ProfilePicture.webp" 
                alt="Profile" 
                className="w-24 h-24 rounded-full mb-4" 
                />
                <h2 className="text-xl font-semibold text-gray-800">Natasha Sibanda</h2>
                <p className="text-gray-600">Email: natasha@example.com</p>
            </div>

            <div className="space-y-4 text-gray-700">
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
