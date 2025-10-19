import React, { useState } from "react";

function WorkoutLog() {
    const [workouts, setWorkouts] = useState([
        { id: 1, name: "Morning Run", time: "45 min" },
        { id: 2, name: "Plank", time: "1 min" },
    ]);

    const [newWorkout, setNewWorkout] = useState({ name: "", time: "" });

    const addWorkout = (e) => {
        e.preventDefault();
        if (!newWorkout.name || !newWorkout.time) return;
        setWorkouts([...workouts, { id: workouts.length + 1, ...newWorkout }]);
        setNewWorkout({ name: "", time: "" });
    };

    return (
        <div>
            <form onSubmit={addWorkout} className="mb-4 flex-col-gap-4">
                <input 
                    type="text" 
                    placeholder="Workout name"
                    value={newWorkout.name}
                    onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
                    className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="text" 
                    placeholder="Workout time"
                    value={newWorkout.time}
                    onChange={(e) => setNewWorkout({ ...newWorkout, time: e.target.value })}
                    className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Add Workout
                </button>
            </form>

            <ul className="space-y-2">
                {workouts.map((workout) => (
                    <li key={workout.id} className="border p-2 rounded-lg bg-gray-60">
                        {workout.name} - {workout.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutLog;