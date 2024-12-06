import BookShelf from './bookshelf'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookShelfPage = ({books, updateBook}) => {

    return (
        <div>
            <div>
                <BookShelf title="Currently Reading" books = {books.length > 0 ? books.filter((b) => b.shelf === "currentlyReading") : books} updateBook={updateBook} />
                <BookShelf title="Want To Read" books = {books.length > 0 ? books.filter((b) => b.shelf === "wantToRead"): books} updateBook={updateBook} />
                <BookShelf title="Read" books = {books.length > 0 ? books.filter((b) => b.shelf === "read") : books} updateBook={updateBook} />
            </div>
            <div className="open-search">
                <Link to="/search" className="open-search">
                    Add a book
                </Link>
            </div>
        </div>
        

    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

export default BookShelfPage;