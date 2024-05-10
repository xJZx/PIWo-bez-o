import React from 'react';
import '../App.css'; // CSS styles for this section

const RentSection = () => {
  return (
    <section id="rent" className="footer grid">
      <div className="card-image" style={{ backgroundImage: 'url(./Assets/footer.jpg)' }}></div>
      <article className="footer-details">
        <p className="title-large">Rent with us!</p>
        <p className="text-middle">
          If you're a hotel or an apartment owner who's looking to reach more customers, you can now rent your property with TranquilTravels.
        </p>
        <button className="button secondary">Learn more <img src="./Assets/Arrow.svg" alt="Arrow" /></button>
      </article>
    </section>
  );
};

export default RentSection;