import BookshelfChanger from "./bookshelfChanger";
import PropTypes from "prop-types";
import { useState } from "react";

const Book = ({book, updateBook}) => {
    var imageBackground = ''
    
    try {
        imageBackground = book.imageLinks.thumbnail;
    } catch {
        imageBackground = ''
    }

    return (

            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url(${imageBackground})`
                    }}
                    ></div>
                    <BookshelfChanger book={book} updateBook={updateBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
    )
};

Book.propTypes = {
    book: PropTypes.object.isRequired
  };

export default Book;