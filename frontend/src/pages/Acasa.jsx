import React from 'react'
import { Link } from 'react-router-dom'
import ATV1 from '../imagini/ATV.png'
import ATV2 from '../imagini/bicicleta.png'
import ATV3 from '../imagini/KTM.png'
import ATV4 from '../imagini/Suzuki-V-Strom.png'

function Acasa() {
    return (
      <div className="container-acasa">
       <Link to='/rezervare-noua/ATV1' className='image'>
  <img src={ATV1} alt='ATV 1' />
  <div className="image-overlay">
    <h1>ATV POLARIS</h1>
    <h2>Click pentru a rezerva.</h2>
  </div>
</Link>

        <Link to='/rezervare-noua/ATV2' className='image'>
          <img src={ATV2} alt='ATV 2' />
        </Link>
        <Link to='/rezervare-noua/ATV3' className='image'>
          <img src={ATV3} alt='ATV 3' />
        </Link>
        <Link to='/rezervare-noua/ATV4' className='image'>
          <img src={ATV4} alt='ATV 4' />
        </Link>
      </div>
    )
  }
  

export default Acasa
