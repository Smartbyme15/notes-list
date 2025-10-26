import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

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
      <NoteForm
        onAdd={addNote}
        onUpdate={updateNote}
        editNote={editNote}
      />
      <NoteList
        notes={notes}
        onDelete={deleteNote}
        onEdit={startEditing}
      />
    </div>
  );
}
