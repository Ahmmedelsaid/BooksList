import React from "react";
import "../App.css";
import { useApp } from "../context/Contect";
function Fav() {
  const { fav, addTO, remove } = useApp();
  const favChecker = (id) => {
    const boolean = fav.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="fav">
      {fav.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt=""></img>
          </div>
          <div>
            {favChecker(book.id) ? (
              <button onClick={() => remove(book.id)}>Remove</button>
            ) : (
              <button onClick={() => addTO(book)}>ADD</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fav;
