import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, collection, getDocs } from '../Data/init';
import HotelCards from './HotelCards';
import { favouritesReducer } from '../Data/favouritesReducer'; // Importing the favorites reducer
import '../App.css';

const BrowseSection = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [favourites, dispatch] = useReducer(favouritesReducer, [], () => {
    const localData = localStorage.getItem('favourites');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    const fetchHotels = async () => {
      const hotelsCollection = collection(db, 'hotels');
      const hotelsSnapshot = await getDocs(hotelsCollection);
      const hotelsList = hotelsSnapshot.docs.map(doc => doc.data());
      setHotels(hotelsList);
    };

    fetchHotels();
  }, []);

  const handleViewOffer = (hotel) => {
    navigate('/hotel-details', {
      state: hotel,
    });
  };

  const handleAddToFavourites = (hotel) => {
    dispatch({ type: 'ADD_TO_FAVOURITES', payload: hotel });
  };

  const handleRemoveFromFavourites = (hotel) => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: hotel });
  };

  const isFavourite = (hotel) => {
    return favourites.some(favHotel => favHotel.name === hotel.name);
  };

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place, etc." />
      <section className="grid hotel-cards">
        {hotels.map((hotel, index) => (
          <HotelCards
            key={index}
            {...hotel}
            onClick={() => handleViewOffer(hotel)}
            onAddToFavourites={() => handleAddToFavourites(hotel)}
            onRemoveFromFavourites={() => handleRemoveFromFavourites(hotel)}
            isFavourite={isFavourite(hotel)}
          />
        ))}
      </section>
      <button className="button secondary">Find more <img src="./Assets/Arrow.svg" alt="Arrow" /></button>
    </section>
  );
};

export default BrowseSection;