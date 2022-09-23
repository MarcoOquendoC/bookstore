import React from 'react';

const Books = () => (
  <div className="book-list">
    <h2>BooksList</h2>
    <div className="book">
      <div className="book-detail">
        <p>category</p>
        <h3>Book 1</h3>
        <p>author</p>
      </div>
      <div className="progress">
        <p>64% completed</p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 15</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
    <div className="book-update">
      <p>comment</p>
      <p>remove</p>
      <p>edit</p>
    </div>

    <div className="book">
      <div className="book-detail">
        <p>category</p>
        <h3>Book 2</h3>
        <p>author</p>
      </div>
      <div className="progress">
        <p>64% completed</p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 15</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
    <div className="book-update">
      <p>comment</p>
      <p>remove</p>
      <p>edit</p>
    </div>
  </div>
);

export default Books;
