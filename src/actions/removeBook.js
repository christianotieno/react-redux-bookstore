import axios from 'axios';
import { REMOVE_BOOK } from './index';
/* eslint-disable no-debugger, no-console */

const removeBook = book => dispatch => {
  dispatch(REMOVE_BOOK(book));
  axios.delete(
    `https://immense-taiga-94124.herokuapp.com/books/${book.id}`,
  ).then(response => {
    if (response.error) {
      console.log(response.error);
      console.log(book.id);
    }
  }).catch(error => {
    console.log(error);
    console.log(book.id);
  });
};

export default removeBook;
