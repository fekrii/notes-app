import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import { ReactComponent as AddIcon } from "../assets/add.svg";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  const getNotesData = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotesData();
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <ListItem note={note} key={note.id} />
        ))}
      </div>
      <Link to="/notes/new" className="floating-button">
        <AddIcon />
      </Link>
    </div>
  );
};

export default NotesListPage;
