import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarRezervari = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/reservations/calendar'); // înlocuiește cu URL-ul corect
        console.log(res.data);
        setEvents(res.data);
      } catch (error) {
        console.error('A apărut o eroare la preluarea rezervărilor:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default CalendarRezervari;
