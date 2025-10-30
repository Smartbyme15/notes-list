
import NoteItem from "./NotesItem";

export default function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0)
    return <p style={{ textAlign: "center", color: "#94a3b8" }}>No notes yet...</p>;

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
