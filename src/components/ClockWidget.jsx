import React, { useState, useEffect } from 'react';

const ClockWidget = ({ accentColor }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="glassmorphism p-4 w-full max-w-sm">
      <h3 className="text-lg font-bold mb-2">{getGreeting()}</h3>
      <p className="text-2xl">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockWidget;