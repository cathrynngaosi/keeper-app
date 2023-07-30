import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";

function App() {
  const [notesList, setNotesList] = useState([]);

  function addNote(event, newNote) {
    setNotesList((prev) => {
      return [...prev, newNote];
    });
    event.preventDefault();
  }

  function deleteNote(id) {
    setNotesList((prev) => {
      return notesList.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
