import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = initialState => {
  const books = booksReducer(initialState);
  return combineReducers({
    books,
    filter: filterReducer,
  });
};

export default rootReducer;
