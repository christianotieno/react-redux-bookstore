import axios from 'axios';
import { REMOVE_BOOK } from './index';
/* eslint-disable no-debugger, no-console */

const removeBook = id => dispatch => {
  dispatch(REMOVE_BOOK(id));
  axios.delete(
    `https://immense-taiga-94124.herokuapp.com/books/${id}`,
  ).then(response => {
    if (response.err) {
      console.log(response.err);
    }
  }).catch(error => {
    console.log(error);
  });
};

export default removeBook;
