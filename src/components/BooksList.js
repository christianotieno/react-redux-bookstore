import React from 'react';
import {connect} from 'react-redux';

const BooksList = () => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      <tr>
        <td>1</td>
        <td>book title</td>
        <td>category</td>
      </tr>
      <tr>
        <td>2</td>
        <td>another book title</td>
        <td>another category</td>
      </tr>
    </table>
  </div>
);

const mapStateToProps = function(state){
  return {
    books: state.books
  }
}

export default BooksList;
