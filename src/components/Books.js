import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFetch } from '../redux/books/books';

const Books = ({ book }) => {
  const dispatch = useDispatch();

  const remBook = (e) => {
    const { id } = e.target;
    dispatch(removeBookFetch({ id }));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p>{book.category}</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div className="progress">
        <p>64% completed</p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 15</p>
        <button type="button">Update Progress</button>
      </div>
      <div className="book-update">
        <button type="button">comment</button>
        <button type="button" id={book.id} onClick={remBook}>remove</button>
        <button type="button">edit</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
