import './index.css';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import AboutUs from "./Pages/AboutUs"; 
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage"; 
import DashboardPage from "./Pages/DashboardPage";
import WorkoutHistory from "./components/WorkoutHistory";
import WorkoutLog from "./components/WorkoutLog";
import ProgressChart from "./components/ProgressChart";
import ProfilePage from "./Pages/ProfilePage"; 
import ExercisesPage from "./Pages/ExercisesPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-lightGray text-darkText flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/progress" element={<ProgressChart />} />
            <Route path="/dashboard/history" element={<WorkoutHistory />} />
            <Route path="/dashboard/log" element={<WorkoutLog />} />
            <Route path="/profile" element={<ProfilePage />} /> 
            <Route path="/exercises" element={<ExercisesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


