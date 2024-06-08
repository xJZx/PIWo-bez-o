import React from 'react';
import '../App.css';

const HotelCards = ({ name, location, rating, price, imgSrc, onClick, onAddToFavourites, onRemoveFromFavourites, isFavourite }) => {
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
      {isFavourite ? (
        <button className="button secondary" onClick={onRemoveFromFavourites}>Remove from Favourites</button>
      ) : (
        <button className="button primary" onClick={onAddToFavourites}>Add to Favourites</button>
      )}
    </article>
  );
};

export default HotelCards;