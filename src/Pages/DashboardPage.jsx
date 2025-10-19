import React from "react";
import { useNavigate } from "react-router-dom";
import WorkoutLog from "../components/WorkoutLog";
import WorkoutHistory from "../components/WorkoutHistory";
import ProgressChart from "../components/ProgressChart";

function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black p-8 text-white">
            <main className="flex-grow">
                {/* Welcome Section */}
                <section className="mb-8 text-center">
                    <h1 className="text-5xl font-extrabold text-neonBlue mb-3 drop-shadow-xl tracking-wide neon-glow animate-flicker">
                        WELCOME, NATASHA!
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Here's your fitness tracker dashboard overview. 
                        You can go ahead and log your workouts, track your progress, and see your workout history.
                    </p>
                </section>

                {/* Cards Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-blue-800 to-indigo-900 p-6 rounded-2xl shadow-xl border border-blue-500/40 hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-neonGreen">
                            Workout Log
                        </h2>
                        <WorkoutLog />
                    </div>

                    <div className="bg-gradient-to-br from-pink-700 to-purple-900 p-6 rounded-2xl shadow-xl border border-pink-500/40 hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-neonYellow">
                            Workout History
                        </h2>
                        <WorkoutHistory />
                    </div>

                    <div className="bg-gradient-to-br from-teal-700 to-cyan-900 p-6 rounded-2xl shadow-xl border border-cyan-500/40 hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-neonBlue">
                            Progress Chart
                        </h2>
                        <ProgressChart />
                    </div>
                </section>

                {/* Buttons Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <button 
                        onClick={() => navigate("/workouts/new")}
                        className="w-full bg-gradient-to-r from-neonBlue to-blue-600 text-white py-3 rounded-lg font-bold shadow-md hover:from-neonGreen hover:to-green-500 transition-transform transform hover:scale-105"
                    >
                        Add A New Workout 
                    </button>

                    <button 
                        onClick={() => navigate("/dashboard/progress")} 
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-bold shadow-md hover:from-neonYellow hover:to-yellow-500 transition-transform transform hover:scale-105"
                    >
                        View Progress Chart 
                    </button>

                    <button 
                        onClick={() => navigate("/dashboard/history")} 
                        className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-3 rounded-lg font-bold shadow-md hover:from-pink-500 hover:to-red-500 transition-transform transform hover:scale-105"
                    >
                        View Workout History 
                    </button>
                </section>
            </main>
        </div>
    );
}

export default DashboardPage;
