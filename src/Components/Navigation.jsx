import React from 'react';
import '../App.css'; // Importing the relevant CSS

const Navigation = () => {
  return (
    <nav className="fixed-navigation">
      <img className="logo" src="./Assets/logo.svg" alt="Logo" />
      <ul className="nav-links">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#browse">Find offers</a></li>
        <li><a className="nav-link" href="#rent">Rent with us</a></li>
        <li><a className="nav-link" href="#myoffers">My offers</a></li>
        <li><a className="nav-link" href="#">Sign up</a></li>
        <button className="button primary">Log in</button>
      </ul>
      <button className="button primary hidden">Menu</button>
    </nav>
  );
};

export default Navigation;