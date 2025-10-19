import React, { useEffect, useState } from "react";

function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const catRes = await fetch("https://wger.de/api/v2/exercisecategory/");
        const catData = await catRes.json();
        const catMap = {};
        catData.results.forEach((cat) => {
          catMap[cat.id] = cat.name;
        });
        setCategories(catMap);

        // Fetch exercises (English language = 2)
        const exRes = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=50");
        const exData = await exRes.json();
        setExercises(exData.results || []);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading exercises...</p>;
  }

  // Filter exercises by selected category
  const filteredExercises =
    selectedCategory === "all"
      ? exercises
      : exercises.filter((ex) => ex.category === parseInt(selectedCategory));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Exercises</h1>

      {/* Category filter */}
      <div className="flex justify-center mb-6">
        <select
          className="border rounded-lg p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {Object.entries(categories).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Exercises grid */}
      {filteredExercises.length === 0 ? (
        <p className="text-center">No exercises found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
              <p className="text-gray-600 mb-2">
                Category: {categories[exercise.category] || "No category"}
              </p>
              <div
                className="text-gray-800 text-sm"
                dangerouslySetInnerHTML={{ __html: exercise.description }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExercisesPage;
 



