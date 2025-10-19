import React from "react";
import { useNavigate } from "react-router-dom";
import WorkoutLog from "../components/WorkoutLog";
import WorkoutHistory from "../components/WorkoutHistory";
import ProgressChart from "../components/ProgressChart";

function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <main className="flex-grow-8">
                <section className="mb-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-2">
                        WELCOME, NATASHA!
                    </h1>
                    <p className="text-gray-700">
                        Here's your fitness tracker dashboard overview. 
                        You can go ahead and log your workouts, track your progress and see your workouts history.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">
                            Workout Log
                        </h2>
                        <WorkoutLog />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">
                            Workout History
                        </h2>
                        <WorkoutHistory />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">
                            Progress Chart
                        </h2>
                        <ProgressChart />
                    </div>
                </section>

                <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
