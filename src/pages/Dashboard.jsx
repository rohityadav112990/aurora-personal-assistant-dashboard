import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import QuoteWidget from '../components/QuoteWidget';
import ClockWidget from '../components/ClockWidget';

const Dashboard = ({ accentColor }) => {
  const dailyGoal = localStorage.getItem('dailyGoal') || 'No goal set';

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Today’s Goal: {dailyGoal}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClockWidget accentColor={accentColor} />
        <WeatherWidget accentColor={accentColor} />
        <QuoteWidget accentColor={accentColor} />
      </div>
    </div>
  );
};

export default Dashboard;