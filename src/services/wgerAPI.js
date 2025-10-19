import axios from "axios";

const BASE_URL = "https://wger.de/api/v2";

export const getExercises = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=10`);
    console.log("Wger API data:", response.data); 
    return Array.isArray(response.data.results) ? response.data.results : [];
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};
