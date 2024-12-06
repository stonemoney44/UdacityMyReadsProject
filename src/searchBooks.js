import { Link } from "react-router-dom";
import Book from "./book";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import PropTypes from "prop-types";


const SearchBooks = ({updateBook}) => {
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleChange = (event => {
        setSearchText(event.target.value);
    })

    useEffect(() => {
        const searchBooks = async () => {
          if (searchText !== '') {
            const res = await BooksAPI.search(searchText, 100);
            setSearchBooks(res);
          }
        };
    
        searchBooks();
      }, [searchText]);

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