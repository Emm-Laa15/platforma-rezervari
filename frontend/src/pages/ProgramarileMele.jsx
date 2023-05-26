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
    const vehicleTypes = ['atv', 'ebikes', 'motoreta', 'motocicleta'];
    const allBookings = [];
    for (let vehicleType of vehicleTypes) {
      const response = await axios.get(`http://localhost:3001/rezervari/${vehicleType}/user/${user.email}`);
      const bookingsWithVehicleType = response.data.map(booking => ({...booking, vehicleType}));
      allBookings.push(...bookingsWithVehicleType);
    }
    setBookings(allBookings);
  } catch (error) {
    console.error('A aparut o eroare la preluarea rezervarilor:', error);
  }
};

    fetchBookings();
  }, [user.email]);

 return (
  <div>
  <h1 className="text-color">Programarile Mele</h1>

  {bookings.map((booking, index) => (
    <div key={index}>
      <h2 className="text-color">{booking.vehicleType.toUpperCase()}</h2>
      <p className="text-color">
        <strong>Start Rezervare: </strong>
        {new Date(booking.startTime).toLocaleString()}
      </p>
      <p className="text-color">
        <strong>Sfarsit Rezervare: </strong>
        {new Date(booking.endTime).toLocaleString()}
      </p>
      <p className="text-color">
        <strong>Suma Ron: </strong>
        {booking.sumaRon}
      </p>
    </div>
  ))}
</div>

  );
};

export default ProgramarileMele;
