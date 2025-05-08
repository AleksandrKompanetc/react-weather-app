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
            <p className='bold'>35 °C</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20 %</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
