import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow fixed top-0 left-0 w-full z-50 transition duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Navigation Links */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* "My Profile" navigates to the home page */}
              <Link 
                to="/" 
                className="text-2xl font-bold text-gray-950 uppercase dark:text-white transition-all duration-300 transform hover:scale-105 hover:text-gray-600"
              >
                My Profile
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6 ml-8">
              <Link 
                to="/" 
                className="text-gray-950 dark:text-white uppercase font-semibold transition-colors duration-300 hover:text-gray-500"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-950 dark:text-white uppercase font-semibold transition-colors duration-300 hover:text-gray-500"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-950 dark:text-white uppercase font-semibold transition-colors duration-300 hover:text-gray-500"
              >
                Contact
              </Link>
              <Link 
                to="/service" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
              >
                Service
              </Link>
              <Link 
                to="/project" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
              >
                Project
              </Link>
            </div>
          </div>

          {/* Social & Utility Buttons */}
          <div className="flex items-center">
            <a 
              href="mailto:jammelbrona@gmail.com" 
              className="mr-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaEnvelope className="text-gray-600 dark:text-gray-300" />
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mr-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-rotate-6"
            >
              <FaGithub className="text-gray-600 dark:text-gray-300" />
            </a>

            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden ml-4 p-2 focus:outline-none"
            >
              <svg 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 shadow-lg transition-all duration-300 ease-in-out">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
          >
            Contact
          </Link>
          <Link 
            to="/service" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
          >
            Service
          </Link>
          <Link 
            to="/project" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold transition-colors duration-300 hover:text-gray-500"
          >
            Project
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
