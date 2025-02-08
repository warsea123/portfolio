import React, { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("#footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-gray-100 dark:bg-gray-800 py-8 mt-10 shadow-lg border-t-2 border-gray-300 dark:border-gray-700 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-center sm:text-left">
          {/* Copyright */}
          <div className="text-lg font-semibold text-gray-950 dark:text-white">
            <p>&copy; 2025. All rights reserved.</p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center sm:justify-start items-center space-y-2 text-gray-950 dark:text-white">
            <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <FaPhoneAlt className="text-[1.5rem] text-green-500 animate-pulse" />
              <span className="text-lg font-medium">+63 - 921 - 402 - 7979</span>
            </div>
            <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <FaEnvelope className="text-[1.5rem] text-yellow-500 animate-bounce" />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-400">
                jammelbrona@gmail.com
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/yourprofile"
              className="text-blue-500 dark:text-blue-400 hover:text-[#1DA1F2] transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaTwitter className="text-[2rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="text-blue-700 dark:text-blue-600 hover:text-[#0077B5] transition-transform duration-300 transform hover:scale-110 hover:-rotate-6"
            >
              <FaLinkedin className="text-[2rem]" />
            </a>
            <a
              href="https://github.com/yourprofile"
              className="text-gray-700 dark:text-gray-500 hover:text-[#333] transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <FaGithub className="text-[2rem]" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-950 uppercase dark:text-white text-sm">
          <p className="transition-opacity duration-700 ease-in">Developed by Jammel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
