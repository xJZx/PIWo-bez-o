import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../Data/init";
import "../App.css"; // Ensure you import the CSS file

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmailAndPassword(name, email, password);
      setCurrentUser(true);
    } catch (error) {
      alert(error.message);
    }
  };

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name" // Added id attribute
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email" // Added id attribute
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password" // Added id attribute
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;