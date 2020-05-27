import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <div className="book-div">
      <div className="book-group">
        <p id="category">
          {book.category}
        </p>
        <p id="title">
          {book.title}
        </p>
      </div>
      <button
        className="remove-button"
        type="button"
        onClick={handleRemoveBook}
      >
        Remove book

      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
