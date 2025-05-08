import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&lat={lat}&lon={lon}&appid=150a49263a5b1ff973b07348fc7e8bda`
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>30 °C</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>35 °C</p>
          </div>
          <div className='humidity'>
            <p>20 %</p>
          </div>
          <div className='wind'>
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
