import React from "react";
import { useNavigate } from "react-router-dom";
import WorkoutLog from "../components/WorkoutLog";
import WorkoutHistory from "../components/WorkoutHistory";
import ProgressChart from "../components/ProgressChart";

function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <main className="flex-grow- bg-gray-900 min-h-screen-6">
                <section className="mb-8">
                    <h1 className="text-4xl font-bold text-neonBlue mb-2">
                        WELCOME, NATASHA!
                    </h1>
                    <p className="text-gray-300">
                        Here's your fitness tracker dashboard overview. 
                        You can go ahead and log your workouts, track your progress and see your workouts history.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-1-4 border-neonBlue">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Workout Log
                        </h2>
                        <WorkoutLog />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-1-4 border-neonBlue">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Workout History
                        </h2>
                        <WorkoutHistory />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-1-4 border-neonBlue">
                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Progress Chart
                        </h2>
                        <ProgressChart />
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button 
                    onClick={() => navigate("/workouts/new")}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        Add A New Workout 
                    </button>
                    <button onClick={() => navigate("/dashboard/progress")} className="w-full bg-blue-600 text-white py-3 round-lg hover:bg-blue-700 transition">
                        View Progress Chart 
                    </button>
                    <button onClick={() => navigate("/dashboard/history")} className="w-full bg-blue-600 text-white py-3 round-lg hover:bg-blue-700 transition">
                        View Workout History 
                    </button>
                </section>
            </main>
            </div>
    );
}

export default DashboardPage; 
