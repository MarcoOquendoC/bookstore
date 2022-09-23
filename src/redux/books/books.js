// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

// Initial state
const initialState = [
  {
    title: 'Crimen y Castigo',
    author: 'Fedor Dostoiewsky',
    category: 'Drama',
    id: '1',
  },
  {
    title: 'The Man Who Calculated',
    author: 'Malba Tahan',
    category: 'Adventure',
    id: '2',
  },
  {
    title: 't3',
    author: 'a3',
    category: 'c3',
    id: '3',
  },
];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
};

export default bookReducer;
