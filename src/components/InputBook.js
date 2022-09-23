import React from 'react';

const InputBook = () => (
  <form action="" className="form-add-book">
    <input type="text" name="bookTitle" id="book-title" placeholder="title" required />
    <select name="category" id="category">
      <option value="" disabled selected>Category</option>
    </select>
    <input type="submit" value="ADD BOOK" />
  </form>
);

export default InputBook;
