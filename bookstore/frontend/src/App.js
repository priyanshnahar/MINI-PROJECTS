import React from "react";
import Header from "./Components/File/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/File/Home";
import AddBook from "./Components/AddBook/AddBook";
import Books from "./Components/Book/Books";
import About from "./Components/File/About";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
