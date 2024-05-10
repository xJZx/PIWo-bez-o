import React from 'react';
import '../App.css';

const EditHotelModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal when clicking outside the content
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Hotel Details</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission logic here
          onClose(); // Close modal after form submission
        }}>
          <label htmlFor="hotelName">Hotel Name:</label>
          <input type="text" id="hotelName" name="hotelName" required />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" required />

          <label htmlFor="stars">Stars:</label>
          <select id="stars" name="stars" required>
            <option value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" rows="4" required />

          <button type="submit" className="button primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditHotelModal;