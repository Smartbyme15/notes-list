import React, { useState } from "react";
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const addNote = (note) => {
    setNotes([{ id: Date.now(), ...note }, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditing = (note) => {
    setEditNote(note);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
    setEditNote(null);
  };

  return (
    <div className="app-container">
      <h1>📝 Notes App</h1>
      <NotesForm     
        onAdd={addNote}
        onUpdate={updateNote}
        editNote={editNote}
      />
      <NotesList      
        notes={notes}
        onDelete={deleteNote}
        onEdit={startEditing}
      />
    </div>
  );
}
