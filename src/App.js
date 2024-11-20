import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import './components/CreateRide.css'; // Import the new styles
import './components/CarpoolList.css'; // Import the carpool list styles

function CarpoolList({ rides }) {
  return (
    <div className="carpool-container">
      <h2 className="title">Active Bookings</h2>
      <table className="carpool-table">
        <thead>
          <tr>
            <th>Driver's Name</th>
            <th>Going To</th>
            <th>At Time (Hr:Min)</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride, index) => (
            <tr key={index}>
              <td>{ride.driverName}</td>
              <td>{ride.location}</td>
              <td>{ride.time}</td>
              <td>{ride.pickupPoint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CreateRide({ addRide }) {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (location && time && pickupPoint) {
      addRide({ driverName: 'Driver 1', location, time, pickupPoint });
      navigate('/');
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div className="create-ride-container">
      <h1 className="page-title">Create New Ride</h1>
      <form className="create-ride-form">
        <div className="form-group">
          <label htmlFor="location">Choose Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose Time</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="08:00"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickup">Pickup Point</label>
          <input
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            placeholder="Pickup Point A"
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleSubmit} className="yes-button">
            Yes
          </button>
          <button type="button" onClick={() => navigate('/')} className="no-button">
            No
          </button>
        </div>
      </form>
    </div>
  );
}

function App() {
  const [rides, setRides] = useState([]);

  const addRide = (ride) => {
    setRides([...rides, ride]);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-left">
            <img src="/iba-logo.png" alt="IBA Logo" className="logo" />
            <h1>Carpool App</h1>
          </div>
          <div className="header-right">
            <Link to="/create-ride">
              <button className="create-ride-button">Create Ride</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<CarpoolList rides={rides} />} />
          <Route path="/create-ride" element={<CreateRide addRide={addRide} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
