
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import randomInt from '../helpers/app-helpers';


const BooksForm = ({ createBook }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'category') {
      setState({
        title: state.title,
        category: value,
      });
    }
    if (name === 'title') {
      setState({
        title: value,
        category: state.category,
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { title } = state;
    if (title) {
      createBook({
        id: randomInt(4, 8),
        title,
      });
      setState({
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={state.title}
        name="title"
        placeholder="New book"
      />
      <select
        onChange={handleChange}
        value={state.category}
        name="category"
      >
        { categories.map(category => (
          <option
            key={category}
            value={category}
          >
            {category}

          </option>
        ))}
      </select>
      <button type="submit">
        Store New Book
      </button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
