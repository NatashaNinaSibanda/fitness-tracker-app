import React from "react";

function WorkoutHistory() {
    const historyWorkouts = [
        { id: 1, workout: "Morning Run", date: "2025-09-18", time: "45 min" },
        {id: 2, workout: "Plank", date: "2025-09-17", time: "1 min" },
        {id: 3, workout: "Cycling", date: "2025-09-16", time: "1 hour" }, 
    ];

    return (
        <div className="overflow-auto max-h-68">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-2 py-1 text-left">Workout</th>
                        <th className="border px-2 py-1 text-left">Date</th>
                        <th className="border px-2 py-1 text-left">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {historyWorkouts.map((workout) => (
                        <tr key={workout.id}>
                            <td className="border px-2 py-1">{workout.workout}</td>
                            <td className="border px-2 py-1">{workout.date}</td>
                            <td className="border px-2 py-1">{workout.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkoutHistory;