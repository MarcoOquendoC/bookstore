import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Category from './components/Category';
import BooksContainer from './components/BooksContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksContainer />} />
        <Route exact path="/categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
