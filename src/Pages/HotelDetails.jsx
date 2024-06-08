import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import EditHotelModal from '../Components/EditHotelModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HotelDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailContent, setEmailContent] = useState("");
  const location = useLocation();

  const hotel = location.state || {};

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    toast.success("Email sent!");
    setEmailContent("");
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
            <div className="email-container">
              <form onSubmit={handleSendEmail} className="email-form">
                <label htmlFor="emailContent">Message to Owner:</label>
                <textarea
                  id="emailContent"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Write your message here..."
                  required
                />
                <button type="submit" className="button primary">Send Email</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <EditHotelModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
      <ToastContainer />
    </>
  );
};

export default HotelDetails;