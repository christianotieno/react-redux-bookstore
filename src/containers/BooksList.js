import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, filterCategory } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';


const BooksList = ({
  books,
  filter,
  removeBook,
  filterCategory,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <CategoryFilter
        filterCategory={filterCategory}
      />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books.filter(
            book => (
              filter === 'All'
              || book.category === filter),
          ).map(book => (
            <Book
              book={book}
              key={book.id}
              deleteBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterCategory: filter => dispatch(filterCategory(filter)),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
