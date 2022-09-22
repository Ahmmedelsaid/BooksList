import React from "react";
import BookList from "./components/BookList";
import Fav from "./components/Fav";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Want from "./components/Want";
import Current from "./components/Current";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Books List</h1>
      <hr></hr>
      <br></br>
      <Routes>
        <Route path="/" element={<BookList></BookList>}></Route>
        <Route path="book/:id" element={<BookDetails></BookDetails>}></Route>
      </Routes>
      <br></br>

      <hr></hr>
      <h1>Read</h1>
      <hr></hr>
      <Fav></Fav>
      <br></br>

      <hr></hr>
      <h1>Want to Read</h1>
      <hr></hr>
      <Want></Want>
      <br></br>

      <hr></hr>
      <h1>Currently Reading</h1>
      <hr></hr>
      <Current></Current>
      <Footer></Footer>
    </div>
  );
}

export default App;
