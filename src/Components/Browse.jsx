import React from 'react';
import { useNavigate } from 'react-router-dom';
import HotelCards from './HotelCards'; // Importing the HotelCards component
import '../App.css'; // CSS for this section

const BrowseSection = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleViewOffer = (hotel) => {
    // Navigate to the HotelDetails page and pass the hotel data
    navigate('/hotel-details', {
      state: hotel, // Passing the entire hotel object as state
    });
  };

  const hotels = [
    {
      name: "Harmony Hideaway Hotel",
      location: "Florence",
      rating: "★★★★★",
      price: "100€",
      imgSrc: "./Assets/cards1.jpg",
    },
    {
      name: "Harmony Hideaway Hotel",
      location: "Madrid",
      rating: "★★★★★",
      price: "70€",
      imgSrc: "./Assets/cards2.jpg",
    },
    {
      name: "Harmony Hideaway Hotel",
      location: "Malaga",
      rating: "★★★★★",
      price: "80€",
      imgSrc: "./Assets/cards3.jpg",
    },
    {
      name: "Harmony Hideaway Hotel",
      location: "Sienna",
      rating: "★★★★★",
      price: "110€",
      imgSrc: "./Assets/cards4.jpg",
    },
  ];

  return (  
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place, etc." />
      <section className="grid hotel-cards">
        {hotels.map((hotel, index) => (
          <HotelCards
            key={index}
            {...hotel} // Spread the hotel data
            onClick={() => handleViewOffer(hotel)} // Pass the entire hotel data
          />
        ))}
      </section>
      <button className="button secondary">Find more <img src="./Assets/Arrow.svg" alt="Arrow" /></button>
    </section>
  );
};

export default BrowseSection;