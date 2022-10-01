import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFetch } from '../redux/books/books';
import circularbar from '../assets/circularbar.png';

const Books = ({ book }) => {
  const dispatch = useDispatch();

  const remBook = (e) => {
    const { id } = e.target;
    dispatch(removeBookFetch(id));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p className="book-category">{book.category}</p>
        <h2>{book.title}</h2>
        <p className="manage-btn">{book.author}</p>
        <div className="book-update">
          <button className="manage-btn" type="button">Comments</button>
          <span className="line">|</span>
          <button className="manage-btn" type="button" id={book.id} onClick={remBook}>Remove</button>
          <span className="line">|</span>
          <button className="manage-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <img className="circularbar" src={circularbar} alt="circularbar" />
        <div>
          <p className="percentage">64%</p>
          <p className="comp">Completed</p>
        </div>
      </div>
      <span className="divline" />
      <div className="current-chapter">
        <p className="comp">CURRENT CHAPTER</p>
        <p>Chapter 15</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Books;
