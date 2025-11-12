import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AnalyticsPanel = ({ accentColor }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    const handleStorageChange = () => setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;

  const barData = {
    labels: ['Completed', 'Pending'],
    datasets: [{
      label: 'Tasks',
      data: [completedTasks, pendingTasks],
      backgroundColor: [accentColor, '#e2e8f0'],
    }],
  };

  const pieData = {
    labels: ['Work', 'Study', 'Personal'],
    datasets: [{
      data: [
        tasks.filter(t => t.category === 'Work').length,
        tasks.filter(t => t.category === 'Study').length,
        tasks.filter(t => t.category === 'Personal').length,
      ],
      backgroundColor: [accentColor, '#fbbf24', '#10b981'],
    }],
  };

  return (
    <div className="glassmorphism p-6">
      <h2 className="text-2xl font-bold mb-4">Productivity Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Daily Tasks</h3>
          <Bar data={barData} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Category Breakdown</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;