import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import SearchBooks  from "./searchBooks";
import BookShelfPage from "./bookShelfPage"
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const updateBook = async (updateBook, newShelf) => {

    await BooksAPI.update(updateBook, newShelf);
    getBooks();
  };

  const updateSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    const searchBooks = async () => {
      if (searchText !== '') {
        const res = await BooksAPI.search(searchText, 100);
        setBooks(res);
      }
    };

    searchBooks();
  }, [searchText]);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="list-books-title">
          <h1 className="App-title">MyReads</h1>
        </div>
      </header>
      <Routes>
        <Route
          exact
          path="/"
          element={<BookShelfPage books={books} updateBook={updateBook} />}> 
        </Route>
        <Route
          path="/search"
          element={<SearchBooks books={books} updateSearchText={updateSearchText} updateBook={updateBook}/>}>
        </Route>
      </Routes>
    </div>
  );
};

export default App;