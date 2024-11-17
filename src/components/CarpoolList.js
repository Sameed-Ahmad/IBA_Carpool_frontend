import React from 'react';
import './CarpoolList.css';

const CarpoolList = () => {
  const carpoolData = [
    { driverName: 'Saad', destination: 'Location 1', time: '08:00', from: 'Pickup Point A' },
    { driverName: 'Sameed', destination: 'Location 2', time: '09:00', from: 'Pickup Point B' },
    { driverName: 'Abaan', destination: 'Location 3', time: '10:00', from: 'Pickup Point C' },
    // Add more carpool entries as needed
  ];

  return (
    <div className="carpool-list">
      {carpoolData.map((carpool, index) => (
        <div className="carpool-item" key={index}>
          <p><strong>Driver's name:</strong> {carpool.driverName}</p>
          <p><strong>Going to:</strong> {carpool.destination}</p>
          <p><strong>At time (Hr:Min):</strong> {carpool.time}</p>
          <p><strong>From:</strong> {carpool.from}</p>
        </div>
      ))}
    </div>
  );
};

export default CarpoolList;