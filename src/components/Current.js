import React from "react";
import "../App.css";
import { useApp } from "../context/Contect";
function Current() {
  const { current, addcurrent, removecurrent } = useApp();
  const currentChecker = (id) => {
    const boolean = current.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="current">
      {current.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt=""></img>
          </div>
          <div>
            {currentChecker(book.id) ? (
              <button onClick={() => removecurrent(book.id)}>Remove</button>
            ) : (
              <button onClick={() => addcurrent(book)}>Read</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Current;
