import React from 'react'
import './reservaciones.css';
import logo from './logo-dried.png'
import nosotros from './nosotros.png'

function reservaciones() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='center-header'>
          <a href='#'className='link'>
            Menú
          </a>
          <img src={logo} alt='Logo' className='logo'></img>
          <a href='#'className='link'>
            Reservaciones
            </a>
        </div>
      </header>
      <section className='jumbotron'>
        <div className='nosotros '>
          <img src={nosotros}></img>
        </div>
      </section>
    </div>
  );
}

export default reservaciones