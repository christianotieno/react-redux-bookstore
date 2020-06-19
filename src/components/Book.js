import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <div className="book-div">
      <div className="left-book">
        <div className="top-left-book">
          <p id="category">{book.category}</p>
          <p id="title">{book.title}</p>
        </div>
        <div className="bottom-left-book">
          <ul className="book-links">
            <li><a href="/" className="book-details" id="comments">Comments</a></li>
            <li>
              <button
                id="remove-button"
                className=" book-details"
                type="button"
                onClick={handleRemoveBook}
              >
                Remove
              </button>

            </li>
            <li><a href="/" className="book-details" id="edit">Edit</a></li>
          </ul>
        </div>
      </div>
      <div className="right-book">
        <p id="book-number">
          Book Number:
        </p>
        <p id="book-id">
          {book.id}
        </p>
        <button id="update-button" className="blue-button" type="button">
          update progress
        </button>
      </div>
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
