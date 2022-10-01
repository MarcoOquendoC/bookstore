import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Books</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <div className="user-container">
      <img className="user" src={user} alt="user" />
    </div>
  </div>
);

export default Navbar;
