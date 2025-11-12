import React, { useState, useEffect } from 'react';
import { FaPin, FaUnpin } from 'react-icons/fa';

const NotesPanel = ({ accentColor }) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [newNote, setNewNote] = useState('');
  const [dailyGoal, setDailyGoal] = useState(localStorage.getItem('dailyGoal') || '');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('dailyGoal', dailyGoal);
  }, [dailyGoal]);

  const addNote = () => {
    if (newNote) {
      setNotes([...notes, { text: newNote, pinned: false, id: Date.now() }]);
      setNewNote('');
    }
  };

  const togglePin = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, pinned: !note.pinned } : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <div className="glassmorphism p-6">
      <h2 className="text-2xl font-bold mb-4">Notes & Goals</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Today's Goal"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(e.target.value)}
          className="w-full p-2 rounded bg-white/10"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Add a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="w-full p-2 rounded bg-white/10"
          rows="3"
        />
        <button onClick={addNote} className={`mt-2 p-2 rounded bg-[${accentColor}] text-white`}>Add Note</button>
      </div>
      <div className="space-y-2">
        {pinnedNotes.concat(unpinnedNotes).map(note => (
          <div key={note.id} className="p-2 bg-white/10 rounded flex justify-between items-start">
            <p>{note.text}</p>
            <div>
              <button onClick={() => togglePin(note.id)} className="mr-2">{note.pinned ? <FaUnpin /> : <FaPin />}</button>
              <button onClick={() => deleteNote(note.id)}>×</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPanel;