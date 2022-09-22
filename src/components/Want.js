import React from "react";
import "../App.css";
import { useApp } from "../context/Contect";

function Want() {
  const { want, WantTo, remWant } = useApp();
  const wantChecker = (id) => {
    const boolean = want.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="want">
      {want.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt=""></img>
          </div>
          <div>
            {wantChecker(book.id) ? (
              <button onClick={() => remWant(book.id)}>Remove</button>
            ) : (
              <button onClick={() => WantTo(book)}>Read</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Want;
