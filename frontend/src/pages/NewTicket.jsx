import { useState } from 'react'
import { useSelector } from 'react-redux'
import BackButton from '../components/BackButton'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const [name] = useState(user.name.toString().replace(/\\"/g, '"'))
  const [email] = useState(user.email.toString().replace(/\\"/g, '"'))

  const [product, setProduct] = useState('ATV1')

  const [atvModel, setAtvModel] = useState('')
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [customerName, setCustomerName] = useState('')
  const [numarClient, setNumarClient] = useState('')
  const [sumaRon, setSumaRon] = useState(0)
  const [telefon, setTelefon] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, product, atvModel, start, end, customerName, numarClient, sumaRon, telefon)
  }

  return (
    <>
      <BackButton />
      <section className='heading'>
        <h1>Crează o rezervare nouă</h1>
        <p>Selectează ATV-ul pe care dorești să îl închiriezi</p>
      </section>

      <section className='form' style={{ paddingBottom: '200px' }}>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Model ATV</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='ATV1'>ATV CFMOTO CForce 450L E5 - 1</option>
              <option value='ATV2'>ATV CFMOTO CForce 450L E5 - 2</option>
              <option value='ATV3'>ATV CFMOTO CForce 450L E5 - 3</option>
              <option value='ATV4'>ATV CFMOTO CForce 450L E5 - 4</option>
              <option value='Bike1'>
                Bicicleta Electrica Neuzer e-city Zagon - 1
              </option>
              <option value='Bike2'>
                Bicicleta Electrica Neuzer e-city Zagon - 2
              </option>
            </select>
          </div>
          {product === 'ATV1' && (
            <>
              <div className='form-group'>
                <label htmlFor='atvModel'>Model Vehicul</label>
                <select
                  name='atvModel'
                  id='atvModel'
                  value={atvModel}
                  onChange={(e) => setAtvModel(e.target.value)}
                >
                  <option value='ATV1'>ATV CFMOTO CForce 450L E5 - 1</option>
                  
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='startTime'>Start Rezervare:</label>
                <DatePicker
                  id='startTime'
                  name='startTime'
                  selected={start}
                  onChange={setStart}
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='endTime'>Sfârșit Rezervare:</label>
                <DatePicker
                  id='endTime'
                  name='endTime'
                  selected={end}
                  onChange={setEnd}
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='customerName'>Customer Name:</label>
                <input
                  id='customerName'
                  name='customerName'
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='numarClient'>Numar Client:</label>
                <input
                  id='numarClient'
                  name='numarClient'
                  value={numarClient}
                  onChange={(e) => setNumarClient(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='sumaRon'>Suma Ron:</label>
                <input
                  id='sumaRon'
                  name='sumaRon'
                  type='number'
                  value={sumaRon}
                  onChange={(e) => setSumaRon(Number(e.target.value))}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='telefon'>Telefon:</label>
                <input
                  id='telefon'
                  name='telefon'
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                />
              </div>
              <button className='btn' type='submit'>
                Salvați Date
              </button>
            </>
          )}
          {product === 'ATV2' && (
            <>
              <div className='form-group'>
                <label htmlFor='atvModel'>Model Vehicul</label>
                <select
                  name='atvModel'
                  id='atvModel'
                  value={atvModel}
                  onChange={(e) => setAtvModel(e.target.value)}
                >
                 <option value='ATV2'>ATV CFMOTO CForce 450L E5 - 2</option>
                  
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='startTime'>Start Rezervare:</label>
                <DatePicker
                  id='startTime'
                  name='startTime'
                  selected={start}
                  onChange={setStart}
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='endTime'>Sfârșit Rezervare:</label>
                <DatePicker
                  id='endTime'
                  name='endTime'
                  selected={end}
                  onChange={setEnd}
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='customerName'>Customer Name:</label>
                <input
                  id='customerName'
                  name='customerName'
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='numarClient'>Numar Client:</label>
                <input
                  id='numarClient'
                  name='numarClient'
                  value={numarClient}
                  onChange={(e) => setNumarClient(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='sumaRon'>Suma Ron:</label>
                <input
                  id='sumaRon'
                  name='sumaRon'
                  type='number'
                  value={sumaRon}
                  onChange={(e) => setSumaRon(Number(e.target.value))}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='telefon'>Telefon:</label>
                <input
                  id='telefon'
                  name='telefon'
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                />
              </div>
              <button className='btn' type='submit'>
                Salvați Date
              </button>
            </>
          )}
        </form>
      </section>
    </>
  )
}

export default NewTicket
