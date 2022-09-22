import axios from "axios";
import "./booklist.css";
import React, { useEffect, useState } from "react";
import { useApp } from "../context/Contect";
import { useNavigate } from "react-router-dom";

function BookList() {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);

  const {
    fav,
    addTO,
    remove,
    want,
    WantTo,
    remWant,
    current,
    addCurrent,
    removecurrent,
  } = useApp();
  const favChecker = (id) => {
    const boolean = fav.some((book) => book.id === id);
    return boolean;
  };

  const wantChecker = (id) => {
    const boolean = want.some((book) => book.id === id);
    return boolean;
  };
  const currentChecker = (id) => {
    const boolean = current.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=60")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="booklist">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img
              onClick={() => nav(`/book/${book.id}`)}
              src={book.image_url}
              alt=""
            ></img>
          </div>
          <div>
            {favChecker(book.id) ? (
              <button onClick={() => remove(book.id)}>Remove</button>
            ) : (
              <button onClick={() => addTO(book)}>Read</button>
            )}
          </div>
          <div>
            {wantChecker(book.id) ? (
              <button onClick={() => remWant(book.id)}>Remove</button>
            ) : (
              <button onClick={() => WantTo(book)}>Want to read</button>
            )}
          </div>
          <div>
            {currentChecker(book.id) ? (
              <button onClick={() => removecurrent(book.id)}>Remove</button>
            ) : (
              <button onClick={() => addCurrent(book)}>Currently Reading</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
