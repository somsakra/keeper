import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState<object[]>([]);

  function addNote(newNote: any) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem: any, index) => {
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
