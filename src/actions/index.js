import React from 'react';

 const CREATE_BOOK = 'CREATE_BOOK';
 const REMOVE_BOOK =  'REMOVE_BOOK';


 export function addBook(book_id, title, category) {
    return { type: CREATE_BOOK, book_id: book_id, category: category };
  }
  
  export function removeBook(book_id, title, category) {
    return { type: REMOVE_BOOK, book_id: book_id, category: category };
  }
  