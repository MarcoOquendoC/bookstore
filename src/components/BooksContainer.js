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
  }, [dispatch]);

  return (
    <>
      <div className="book-list">
        { books?.map((book) => <Books key={book.id} book={book} />)}
      </div>
      <InputBook />
    </>
  );
};
export default BooksContainer;
