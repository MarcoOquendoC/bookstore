import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { fetchBooks } from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk));

store.dispatch(fetchBooks);

export default store;
