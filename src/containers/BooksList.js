import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { filterCategory } from '../actions/index';
import getBooks from '../actions/getBook';
import removeBook from '../actions/removeBook';
import CategoryFilter from '../components/CategoryFilter';


const BooksList = ({
  books,
  filter,
  removeBook,
  getBooks,
  filterCategory,
}) => {
  useEffect(() => { getBooks(); }, [getBooks]);

  const handleRemoveBook = book => { removeBook(book); };

  return (
    <div>
      <CategoryFilter
        filterCategory={filterCategory}
      />
      { books.filter(
        book => (filter === 'All' || book.category === filter),
      ).map(book => (
        <Book
          book={book}
          key={book.id}
          removeBook={handleRemoveBook}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ books: { books }, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterCategory: filter => dispatch(filterCategory(filter)),
  getBooks: () => dispatch(getBooks()),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  getBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
