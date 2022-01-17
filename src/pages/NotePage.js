import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/chevron-left.svg";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);

  const getFilteredNote = async () => {
    if (id !== "new") {
      const response = await fetch(`http://localhost:8000/api/notes/${id}`);
      const data = await response.json();
      setNote(data);
    }
  };

  useEffect(() => {
    getFilteredNote();
  }, [id]);

  // Update note function
  const updateNote = async () => {
    await fetch(`http://localhost:8000/api/notes/${id}/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  // Delete note function
  const deleteNote = async () => {
    await fetch(`http://localhost:8000/api/notes/${id}/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(note),
    });
    navigate("/");
  };

  // Create note function
  const createNote = async () => {
    await fetch(`http://localhost:8000/api/notes/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      createNote();
    }

    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      {/* ? added to prevent error when going to undefined id  */}
      <textarea
        value={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default NotePage;
