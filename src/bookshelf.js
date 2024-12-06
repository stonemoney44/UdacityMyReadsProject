import PropTypes from "prop-types";
import Book from "./book"

const BookShelf = ({title, books, updateBook}) => {

    return (
            <div className="bookshelf">
                <h1>{title}</h1>
                <ol className="books-grid">
                    {books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} updateBook={updateBook} />
                    </li>
                    ))}
                </ol>
            </div>
    );
};

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

export default BookShelf;