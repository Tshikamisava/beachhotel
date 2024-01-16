// In your Bookings.js
import React, { useContext } from 'react';
import { RoomContext } from '../context';
import defaultImg from '../images/room-1.jpeg';

const Bookings = () => {
  const { reservedRooms } = useContext(RoomContext);

  return (
    <div>
      <h2>Your Booked Rooms</h2>
      <div className="rooms">
        {reservedRooms.map((room) => (
          <div key={room.id} className="img-container">
            <img src={room.images[0] || defaultImg} alt={`${room.name} room`} />
            <h3>{room.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
