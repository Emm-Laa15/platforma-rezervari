import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect } from 'react';
import axios from 'axios';


function Home() {
  const { user } = useSelector((state) => state.auth)


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
    <>
      <section className='heading'>
        <h1>Platforma de rezervari</h1>
        <p>Mai jos puteti efectua rezervari in timp real</p>
      </section>
    <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  events={events}
/>
    

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Creati o rezervare noua
      </Link>

      {user && (user.isAdmin || user.isDeveloper) && (
        <>
        <Link to='/history' className='btn btn-block'>
          Vedeti Istoric Rezervari
        </Link>
        <Link to='/csv-uploader' className='btn btn-block'>
          CSV Uploader
        </Link>
        <Link to="/rezervare-noua" className="btn btn-block">
      Creați o rezervare nouă
    </Link>
    <Link to="/lista-rezervari" className="btn btn-block">
      Vedeti lista cu rezervari 
    </Link>

    <Link to="/calendar-rezervari" className="btn btn-block">
      Vedeți Calendarul Rezervărilor
    </Link>
        </>
      )}

  
      
    </>
  )
}

export default Home
