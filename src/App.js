import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HeroSection from './Components/Hero';
import BrowseSection from './Components/Browse';
import RentSection from './Components/Rent';
import EditHotelModal from './Components/EditHotelModal';
import HotelCards from './Components/HotelCards';
import HotelDetails from './Pages/HotelDetails';
import Login from './Pages/Login';
import Register from "./Pages/Signup";
import { AuthProvider } from "./Pages/Auth";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<BrowseSection />} />
          <Route path="/browse" element={<BrowseSection />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/cards" element={<HotelCards />} />
          <Route path="/rent" element={<RentSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;