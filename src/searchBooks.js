import { Link } from "react-router-dom";
import Book from "./book";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import PropTypes from "prop-types";


const SearchBooks = ({books, updateBook}) => {
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState('');

    books.map((book) => {
    })

    const handleChange = (event => {
        setSearchText(event.target.value);
    })

    useEffect(() => {
        const searchBooks = async () => {
          if (searchText !== '') {
            const res = await BooksAPI.search(searchText, 100);
            if (res.length > 0){
                var combinedBookObject = res.map(searchBook => {
                    var book = books.find((book) => book.id === searchBook.id);
                    if (book === undefined){
                        return searchBook
                    } else {
                        return Object.assign(searchBook, {shelf: book.shelf});      
                    }
                });
    
                setSearchBooks(combinedBookObject);
            } else {
                setSearchBooks([]);    
            }
            
          } else {
            setSearchBooks([]);
          }
        };
    
        searchBooks();
      }, [searchText, books]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <ol className="books-grid">
                    {searchBooks.length > 0 ? (searchBooks.map((book) => (
                        <li key={book.id}>
                            <Book book={book} updateBook={updateBook} />
                        </li>
                    ))) : 
                    <div></div>}
                </ol>
            </div>
        </div>
    )
};

SearchBooks.propTypes = {
    updateBook: PropTypes.func.isRequired
  };

export default SearchBooks;