/* eslint-disable no-debugger, no-console */
import axios from 'axios';
import { CREATE_BOOK } from './index';


const createBook = book => dispatch => {
  axios.post(
    'https://immense-taiga-94124.herokuapp.com/books',
    {
      title: book.title,
      category: book.category,
    },
  ).then(response => {
    dispatch(CREATE_BOOK(response.data.data));
  }).catch(error => {
    console.log('Error creating book', error);
  });
};

export default createBook;
