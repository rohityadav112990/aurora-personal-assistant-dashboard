import React from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode, accentColor, setAccentColor }) => {
  return (
    <nav className="glassmorphism p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Aurora Personal Assistant</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-white/20">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="w-8 h-8 rounded-full border-none cursor-pointer"
        />
        <FaPalette className="text-lg" />
      </div>
    </nav>
  );
};

export default Navbar;