import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const booksArray = [
  {
    id: Math.floor((Math.random() * (4 ** 8))),
    title: 'Factulness',
    category: 'Learning',
  },
  {
    id: Math.floor((Math.random() * (4 ** 8))),
    title: 'We are going to need more wine',
    category: 'Biography',
  },
  {
    id: Math.floor((Math.random() * (4 ** 8))),
    title: 'Stranger',
    category: 'Horror',
  },
];

const initState = {
  books: booksArray,
};

const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
