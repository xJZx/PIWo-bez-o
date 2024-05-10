import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HeroSection from './Components/Hero';
import BrowseSection from './Components/Browse';
import RentSection from './Components/Rent';
import EditHotelModal from './Components/EditHotelModal';
import HotelCards from './Components/HotelCards';
import HotelDetails from './Pages/HotelDetails';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpYAmWnnXju33giLZNeNe5DR81dl1xzFg",
  authDomain: "tranquility-aceff.firebaseapp.com",
  projectId: "tranquility-aceff",
  storageBucket: "tranquility-aceff.appspot.com",
  messagingSenderId: "131934825938",
  appId: "1:131934825938:web:037c7fecce8ef18810ac0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Navigation />
      <HeroSection />
      <BrowseSection />
      <RentSection />
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      <Routes>
        {/* <Route path="/" element={<BrowseSection />} /> */}
        <Route path="/hotel-details" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
};

export default App;