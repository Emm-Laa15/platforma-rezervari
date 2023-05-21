import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProgramarileMele = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log(user.email)
        const response = await axios.get(`http://localhost:3001/rezervari/${user.email}`);
        setBookings(response.data);
      } catch (error) {
        console.error('A aparut o eroare la preluarea rezervarilor:', error);
      }
    };

    fetchBookings();
  }, [user.email]);

  return (
    <div>
      <h1>Programarile Mele</h1>

      {bookings.map((booking, index) => (
        <div key={index}>
          <h2>{booking.atvModel}</h2>
          <p>
            <strong>Start Rezervare: </strong>
            {new Date(booking.startTime).toLocaleString()}
          </p>
          <p>
            <strong>Sfarsit Rezervare: </strong>
            {new Date(booking.endTime).toLocaleString()}
          </p>
          <p>
            <strong>Suma Ron: </strong>
            {booking.sumaRon}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProgramarileMele;
