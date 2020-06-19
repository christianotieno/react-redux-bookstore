import axios from 'axios';
import { GET_BOOKS } from './index';

const getBook = () => dispatch => {
  axios.get(
    'https://immense-taiga-94124.herokuapp.com/books',
  ).then(response => {
    dispatch(GET_BOOKS(response.data.data));
  });
};

export default getBook;
