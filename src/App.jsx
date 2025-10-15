import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen bg-lightGray text-darkText">
      <Navbar />
      <main className="p-4">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

