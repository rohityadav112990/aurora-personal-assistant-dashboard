import React from 'react';
import { FaTachometerAlt, FaTasks, FaStickyNote, FaRobot, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ activePage, setActivePage, accentColor }) => {
  const links = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Tasks', icon: <FaTasks /> },
    { name: 'Notes', icon: <FaStickyNote /> },
    { name: 'Assistant', icon: <FaRobot /> },
    { name: 'Analytics', icon: <FaChartBar /> },
  ];

  return (
    <aside className="w-64 glassmorphism p-4">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => setActivePage(link.name)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activePage === link.name ? `bg-[${accentColor}] text-white` : 'hover:bg-white/20'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;