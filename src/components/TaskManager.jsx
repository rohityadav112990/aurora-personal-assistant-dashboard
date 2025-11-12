import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const TaskManager = ({ accentColor }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState({ title: '', category: '', status: 'Pending' });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: '', category: '', status: 'Pending' });
    }
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const pendingTasks = tasks.filter(task => task.status === 'Pending');
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  return (
    <div className="glassmorphism p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="flex-1 p-2 rounded bg-white/10"
        />
        <input
          type="text"
          placeholder="Category"
          value={newTask.category}
          onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          className="flex-1 p-2 rounded bg-white/10"
        />
        <button onClick={addTask} className={`p-2 rounded bg-[${accentColor}] text-white`}><FaPlus /></button>
      </div>
      <div className="mb-4">
        <p>Pending: {pendingTasks.length} | Completed: {completedTasks.length}</p>
      </div>
      <div className="space-y-2">
        {pendingTasks.map(task => (
          <div key={task.id} className="flex items-center justify-between p-2 bg-white/10 rounded">
            <span>{task.title} ({task.category})</span>
            <div>
              <button onClick={() => toggleStatus(task.id)} className="mr-2">✓</button>
              <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
        {completedTasks.map(task => (
          <div key={task.id} className="flex items-center justify-between p-2 bg-green-500/20 rounded line-through">
            <span>{task.title} ({task.category})</span>
            <div>
              <button onClick={() => toggleStatus(task.id)} className="mr-2">✓</button>
              <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;