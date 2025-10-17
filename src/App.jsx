import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import AboutUs from "./pages/AboutUs"; 

function App() {
  return (
    <div className="min-h-screen bg-lightGray text-darkText">
      <Navbar />
      <main className="p-4">
        <LandingPage />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

