import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import Acasa from './Acasa';


const RezervareNouaATV = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [success, setSuccess] = useState(false); 
  const [sumaRon, setSumaRon] = useState(0);
  const [product, setProduct] = useState('ATVPOLARIS');
  
  
  
  useEffect(() => {
    const diffMs = end.getTime() - start.getTime(); // Diferența în milisecunde
    const diffHrs = diffMs / (1000 * 60 * 60); // Convertirea în ore
  
    let calculatedSumaRon = 0;
  
    // Aplicăm tariful corespunzător
    if (diffHrs >= 24) {
      calculatedSumaRon = Math.floor(diffHrs / 24) * 400 + (diffHrs % 24 > 0 ? (diffHrs % 24) * 50 : 0);
    } else {
      calculatedSumaRon = diffHrs * 50;
    }
  
    setSumaRon(calculatedSumaRon); // actualizăm sumaRon cu valoarea calculată
  }, [start, end]); // acest useEffect se declanșează de fiecare dată când start sau end se modifică
  

  const { user } = useSelector((state) => state.auth)
  const token = user.token;
  console.log(token)
  const nume = user.name; //preluam numele utilizatorului
  console.log(nume)
  const email = user.email;
  console.log(email)


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const diffMs = end.getTime() - start.getTime(); // Diferența în milisecunde
    const diffHrs = diffMs / (1000 * 60 * 60); // Convertirea în ore
  
    let calculatedSumaRon = 0;
  
    // Aplicăm tariful corespunzător
    if (diffHrs >= 24) {
      calculatedSumaRon = Math.floor(diffHrs / 24) * 400 + (diffHrs % 24 > 0 ? (diffHrs % 24) * 50 : 0);
    } else {
      calculatedSumaRon = diffHrs * 50;
    }
  
    const newReservation = {
      atvModel: product,
      customerName: nume,
      email: email,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
     
      sumaRon: calculatedSumaRon, // folosim suma calculată
      
    };
  
    console.log("Tipul produsului este: " + newReservation.atvModel)
    console.log("Data de start este: " + newReservation.startTime)
    console.log("Data de final este: " + newReservation.endTime)
    console.log("Numele clienti este: " + newReservation.customerName)
    console.log("Suma ronului este: " + newReservation.sumaRon)

    
    try {
        await axios.post('http://localhost:3001/rezervari/atv', newReservation);
        alert('Rezervare creată cu succes!');
        setProduct('');
        setStart(new Date());
        setEnd(new Date());
        setSuccess(true);
      } catch (error) {
        console.error('A apărut o eroare la crearea rezervării:', error);
      }
      

  };

  return (
    <>
    {success? (
      <Acasa />)
    :(
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
          <label htmlFor='atvModel'>Model Vehicul</label>
          <select
            name='atvModel'
            id='atvModel'
            value={product}
            onChange={event => setProduct(event.target.value)}
          >
            <option value='ATV1'>ATV POLARIS</option>
            
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='startTime'>Start Rezervare:</label>
          <DatePicker
            id='startTime'
            name='startTime'
            selected={start}
            onChange={setStart} // DatePicker va trimite direct o instanță a Date-ului
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div className='form-group'>
          <label htmlFor='endTime'>Sfarsit Rezervare:</label>
          <DatePicker
            id='endTime'
            name='endTime'
            selected={end}
            onChange={setEnd} // DatePicker va trimite direct o instanță a Date-ului
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        
      <div className='form-group'>
        <label htmlFor='sumaRon'>Suma Ron:</label>
        <input
          id='sumaRon'
          name='sumaRon'
          type="number"
          value={sumaRon}
          readOnly
        />

      
      </div>
      <button className='btn' type='submit'>
        Salvati Date
      </button>
      <div>
    <p>
      Tarifele noastre sunt următoarele:
      <ul>
        <li>50 RON pe oră</li>
        <li>400 RON pentru o zi întreagă (24 ore)</li>
      </ul>
      Tariful pentru o zi întreagă se aplică numai dacă rezervi pentru exact la 24 de ore . În caz contrar, tariful pe oră va fi aplicat.
    </p></div>
      
    </form>
    )}
    </>
  )
};

export default RezervareNouaATV;