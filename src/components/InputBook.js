import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
    e.target.reset();

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBook} className="form-add-book">
      <input onChange={onTitleChange} type="text" name="bookTitle" id="book-title" placeholder="title" required value={title} />
      <input onChange={onAuthorChange} type="text" name="bookAuthor" id="book-author" placeholder="author" required value={author} />
      <input onChange={onCategoryChange} type="text" name="category" id="book-category" placeholder="category" required value={category} />

      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default InputBook;
