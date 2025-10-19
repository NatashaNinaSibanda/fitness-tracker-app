import React, { useEffect, useState } from "react";
import { getExercises } from "../services/wgerAPI";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExercises();
      setExercises(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 bg-gradient-to-r from-purple-900 via-pink-800 to-red-700 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">🏋️ Exercises</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-black bg-opacity-70 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: exercise.description }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseList;
