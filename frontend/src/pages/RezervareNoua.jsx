import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const RezervareNoua = () => {
  const [product, setProduct] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [customerName, setCustomerName] = useState('');
  const [numarClient, setNumarClient] = useState('');
  const [sumaRon, setSumaRon] = useState(0);
  const [telefon, setTelefon] = useState('');
  
  const { user } = useSelector((state) => state.auth)
  const token = user.token;
  console.log(token)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReservation = {
      atvModel: product,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      customerName: customerName,
      numarClient: numarClient,
      sumaRon: sumaRon,
      telefon: telefon
    };
    console.log("Tipul produsului este: " + newReservation.product)
    console.log("Data de start este: " + newReservation.start)
    console.log("Data de final este: " + newReservation.end)

    
    try {
        await axios.post('http://localhost:3001/api/reservations/calend', newReservation);
        alert('Rezervare creată cu succes!');
        setProduct('');
        setStart(new Date());
        setEnd(new Date());
      } catch (error) {
        console.error('A apărut o eroare la crearea rezervării:', error);
      }
      
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
          <label htmlFor='atvModel'>Model Vehicul</label>
          <select
            name='atvModel'
            id='atvModel'
            value={product}
            onChange={event => setProduct(event.target.value)}
          >
            <option value='ATV1'>ATV CFMOTO CForce 450L E5 - 1</option>
            <option value='ATV2'>ATV CFMOTO CForce 450L E5 - 2</option>
            <option value='ATV3'>ATV CFMOTO CForce 450L E5 - 3</option>
            <option value='ATV4'>ATV CFMOTO CForce 450L E5 - 4</option>
            <option value='BIKE1'>
              Bicicleta Electrica Neuzer e-city Zagon - 1
            </option>
            <option value='BIKE2'>
              Bicicleta Electrica Neuzer e-city Zagon - 2
            </option>
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
        <label htmlFor='customerName'>Customer Name:</label>
        <input
          id='customerName'
          name='customerName'
          value={customerName}
          onChange={event => setCustomerName(event.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='numarClient'>Numar Client:</label>
        <input
          id='numarClient'
          name='numarClient'
          value={numarClient}
          onChange={event => setNumarClient(event.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='sumaRon'>Suma Ron:</label>
        <input
          id='sumaRon'
          name='sumaRon'
          type="number"
          value={sumaRon}
          onChange={event => setSumaRon(Number(event.target.value))}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='telefon'>Telefon:</label>
        <input
          id='telefon'
          name='telefon'
          value={telefon}
          onChange={event => setTelefon(event.target.value)}
        />
      </div>
      <button className='btn' type='submit'>
        Salvati Date
      </button>
    </form>

    </>
  )
};

export default RezervareNoua;
