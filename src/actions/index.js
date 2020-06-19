const CREATE_BOOK = book => ({ type: 'CREATE_BOOK', payload: book });

const filterCategory = filter => ({ type: 'CHANGE_FILTER', payload: filter });

const REMOVE_BOOK = id => ({ type: 'REMOVE_BOOK', payload: id });

const GET_BOOKS = books => ({ type: 'GET_BOOKS', payload: books });

export {
  CREATE_BOOK, REMOVE_BOOK, filterCategory, GET_BOOKS,
};
