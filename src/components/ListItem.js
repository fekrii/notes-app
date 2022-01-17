import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  const getDate = () => {
    return new Date(note.updated).toLocaleDateString();
  };

  const getTitle = () => {
    const title = note.body.split("\n")[0];
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  return (
    <>
      <Link to={`notes/${note.id}`}>
        <div className="notes-list-item">
          <h3>{getTitle()}</h3>
          <p>
            <span>{getDate()}</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
