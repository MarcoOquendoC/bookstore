const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const URLid = '/apps/f8h8IV552wnG29X0qzCN/books';
const BASE_URL = `${URL}${URLid}`;

// FETCH_BOOK action
const FETCH_BOOK = 'FETCH_BOOK';
// fetchBook Action creator
export const fetchBook = (bookList) => ({ type: FETCH_BOOK, bookList });
// fetchBooks function
export const fetchBooks = () => async (dispatch) => {
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((books) => {
      const bookList = [];
      Object.keys(books).forEach((key) => {
        bookList.push({
          id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
      dispatch(fetchBook(bookList));
    });
};

// ADD_BOOK action
const ADD_BOOK = 'ADD_BOOK';
// addBook Action creator
export const addBook = (book) => ({ type: ADD_BOOK, book });
// addBookFetch function
export const addBookFetch = ({
  id, title, category, author,
}) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    category,
    author,
  };
  await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook({
    id, title, category, author,
  }));
};

// REMOVE_BOOK action
const REMOVE_BOOK = 'REMOVE_BOOK';
// removeBook action creator
export const removeBook = (bookId) => ({ type: REMOVE_BOOK, bookId });
// removeBookFetch function
export const removeBookFetch = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch(removeBook(id)));
};

// Initial state
const initialState = [];
// bookReducer Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    case FETCH_BOOK:
      return action.bookList;
    default: return state;
  }
};

export default bookReducer;
