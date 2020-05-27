import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import randomInt from './helpers/app-helpers';

const booksArray = [
  {
    id: randomInt(4, 8),
    title: 'Factulness',
    category: 'Learning',
  },
  {
    id: randomInt(4, 8),
    title: 'We are going to need more wine',
    category: 'Biography',
  },
  {
    id: randomInt(4, 8),
    title: 'Stranger',
    category: 'Horror',
  },
];

const initialState = {
  books: booksArray,
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
