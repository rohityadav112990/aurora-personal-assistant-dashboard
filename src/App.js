import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Notes from './pages/Notes';
import Assistant from './pages/Assistant';
import Analytics from './pages/Analytics';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [accentColor, setAccentColor] = useState(localStorage.getItem('accentColor') || '#3b82f6');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  const pages = {
    Dashboard: <Dashboard accentColor={accentColor} />,
    Tasks: <Tasks accentColor={accentColor} />,
    Notes: <Notes accentColor={accentColor} />,
    Assistant: <Assistant accentColor={accentColor} />,
    Analytics: <Analytics accentColor={accentColor} />,
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} accentColor={accentColor} setAccentColor={setAccentColor} />
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} accentColor={accentColor} />
        <motion.main
          className="flex-1 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pages[activePage]}
        </motion.main>
      </div>
    </div>
  );
}

export default App;