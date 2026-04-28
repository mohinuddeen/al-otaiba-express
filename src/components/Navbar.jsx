import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'Brands', path: '/', sectionId: 'brands' },
    { name: 'Subsidiaries', path: '/', sectionId: 'subsidiaries' },
    { name: 'About', path: '/', sectionId: 'about' },
    { name: 'Contact', path: '/', sectionId: 'contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-navy-900 py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold group">
            <span className="text-blue-400 group-hover:text-blue-300 transition">AOE</span>
            <span className="text-white"> Holding</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path, link.sectionId)}
                className={`transition-colors duration-200 font-medium ${
                  isActive(link.path) && location.pathname === '/' && window.scrollY === 0
                    ? 'text-blue-400' 
                    : 'text-white/90 hover:text-blue-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path, link.sectionId)}
                className="block w-full text-left text-white/90 hover:text-blue-400 transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition"
            >
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;