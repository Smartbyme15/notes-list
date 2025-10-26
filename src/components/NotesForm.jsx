import React, { useEffect, useState } from "react";

export default function NoteForm({ onAdd, onUpdate, editNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill all fields");

    if (editNote) {
      onUpdate({ id: editNote.id, title, content });
    } else {
      onAdd({ title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="4"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        {editNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}