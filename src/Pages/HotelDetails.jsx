import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import '../App.css';
import EditHotelModal from '../Components/EditHotelModal';

const HotelDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // Get the data from the navigation state

  const hotel = location.state || {}; // Default to an empty object if no state is passed

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="hotel-name">{hotel.name}</h1>
      <section className="hotel-grid">
        <div className="left-column">
          <article className="hotel-card">
            <div
              className="hotel-image"
              style={{ backgroundImage: `url(${hotel.imgSrc})` }}
            >
              <p className="chip">Add to favourites <img src="./Assets/Arrow.svg" alt="Arrow" /></p>
            </div>
          </article>
        </div>
        <div className="right-column">
          <div className="hotel-details">
            <div className="hotel-info">
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Stars:</strong> {hotel.rating}</p>
              <p><strong>Price:</strong> {hotel.price}/night</p>
            </div>
            <p className="hotel-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="button-container">
              <button className="button primary" onClick={handleOpenModal}>
                Edit Hotel
              </button>
              <div className="sub-column">
                <button className="button primary">Remove Hotel</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <EditHotelModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default HotelDetails;