import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subsidiaries from './components/Subsidiaries';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import new pages
import RealEstate from './pages/RealEstate';
import GermanSupplements from './pages/GermanSupplements';
import GermanHealthHub from './pages/GermanHealthHub';
import Go from './pages/Go';
import MultiBrands from './pages/MultiBrands';

function App() {
  return (
    <Router basename="/al-otaiba-express">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Subsidiaries />
              <Brands />
              <About />
              <Contact />
            </>
          } />
          
          {/* Subsidiary Pages Routes */}
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/german-supplements" element={<GermanSupplements />} />
          <Route path="/german-health-hub" element={<GermanHealthHub />} />
          <Route path="/go" element={<Go />} />
          <Route path="/multibrands" element={<MultiBrands />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;