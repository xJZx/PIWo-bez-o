import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // CSS styles for hotel cards

const HotelCards = ({ name, location, rating, price, imgSrc, onClick }) => {
  // const navigate = useNavigate(); // Initialize the navigate hook

  // const handleViewOffer = () => {
  //   navigate('/hotel-details'); // Navigate to the HotelDetails page
  // };

  return (
    <article className="hotel-card">
      <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }}>
        <p className="chip">{location}</p>
      </div>
      <p className="text-middle">{name}</p>
      <p className="text-small">Lorem ipsum dolor sit amet...</p>
      <div className="hotel-card-footer">
        <p className="text-middle">{rating}</p>
        <p className="text-middle">{price}/room</p>
      </div>
      <button className="button primary" onClick={onClick}>View offer <img src="./Assets/Arrow.svg" alt="Arrow" /></button>
    </article>
  );
};

export default HotelCards;