import PropTypes from "prop-types";

const BookshelfChanger = ({book, updateBook}) => {
    if (book.shelf === undefined){
        book.shelf = "none"
    }

    const handleChange = (event => {
        updateBook(book, event.target.value);
    })
    
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
};

BookshelfChanger.propTypes = {
    updateBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  };

export default BookshelfChanger;