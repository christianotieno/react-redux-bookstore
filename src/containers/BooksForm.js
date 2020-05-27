
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { randomInt, categories } from '../helpers/app-helpers';


const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(previousState => (
      { ...previousState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { title, category } = state;
    if (title) {
      createBook({
        id: randomInt(4, 8),
        title,
        category,
      });
      setState({
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <div className="book-form">
      <h2 className="form-title">
        add new Book
      </h2>
      <form
        className="form-input"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={handleChange}
          value={state.title}
          name="title"
          placeholder="Book Title"
          className="book-input"
          minLength="5"
          maxLength="30"
          required
        />
        <select
          onChange={handleChange}
          value={state.category}
          name="category"
          className="drop-down"
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
          Add Book
        </button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
