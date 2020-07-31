import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title === "" && newNote.content === "") return;
    else if (newNote.title === "") newNote.title = "Untitled";
    setNotes(prevNotes => [newNote, ...prevNotes]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(item => item !== prevNotes[id]));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
