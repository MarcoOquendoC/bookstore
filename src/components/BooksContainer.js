import React from 'react';
import { useSelector } from 'react-redux';
import InputBook from './InputBook';
import Books from './Books';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);

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
