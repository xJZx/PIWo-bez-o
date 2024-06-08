import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/Auth";
import '../App.css';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleViewOffer = () => {
    navigate('/login');
  };

  return (
    <nav className="fixed-navigation">
      <img className="logo" src="./Assets/logo.svg" alt="Logo" />
      <ul className="nav-links">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/browse">Find offers</Link></li>
        <li><Link className="nav-link" to="/rent">Rent with us</Link></li>
        <li><Link className="nav-link" to="/cards">My offers</Link></li>
        <button className="button primary" onClick={handleViewOffer}>Sign up</button>
        <button className="button primary" onClick={handleViewOffer}>Log in</button>
        <button className="button primary" onClick={handleViewOffer}>Log in with Google</button>
      </ul>
      <button className="button primary hidden">Menu</button>
    </nav>
  );
};

export default Navigation;