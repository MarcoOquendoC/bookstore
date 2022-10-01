import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookFetch } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    setTitle('');
    setCategory('');
    setAuthor('');
    dispatch(addBookFetch(newBook));
  };

  return (
    <form onSubmit={submitBook} className="form-add-book">
      <h2 className="addnew">Add New Book</h2>
      <div className="inputs">
        <input onChange={onTitleChange} type="text" name="bookTitle" id="book-title" placeholder="title" required value={title} />
        <input onChange={onAuthorChange} type="text" name="bookAuthor" id="book-author" placeholder="author" required value={author} />

        <select
          onChange={onCategoryChange}
          name="category"
          id="book-category"
          required
        >
          <option value="">Category</option>
          <option value="Economy">Economy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Mystery">Mystery</option>
          <option value="Psychology">Psychology</option>
          <option value="Romance">Romance</option>
          <option value="Science">Science</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Self-help">Self-help</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
        </select>
        <input className="addbookbtn" type="submit" value="ADD BOOK" />
      </div>
    </form>
  );
};

export default InputBook;
