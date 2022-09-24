import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputBook from './InputBook';
import Books from './Books';
import { fetchBooks } from '../redux/books/books';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [books, dispatch]);

  return (
    <>
      <div className="book-list">
        <h2>BooksList</h2>
        { books?.map((book) => <Books key={book.id} book={book} />)}
      </div>
      <InputBook />
    </>
  );
};
export default BooksContainer;
