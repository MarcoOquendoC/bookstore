import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const URLid = '/apps/f8h8IV552wnG29X0qzCN/books';
const BASE_URL = `${URL}${URLid}`;

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

// Action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

// Initial state
const initialState = [];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOK:
      return [...action.payload];
    default: return state;
  }
};

// API FETCH
export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((books) => {
      const bookList = [];
      Object.keys(books).forEach((key) => {
        bookList.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
    });
});

export const addBookFetch = ({ id, title, category }) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    category,
  };
  await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook({ id, title, category }));
};

export const removeBookFetch = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: REMOVE_BOOK, payload: id }));
};

export default bookReducer;
