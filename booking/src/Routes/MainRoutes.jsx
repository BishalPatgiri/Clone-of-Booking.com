import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Airport from '../Pages/Airport'
import Attractions from '../Pages/Attractions'
import CarRentals from '../Pages/CarRentals'
import FlightHotel from '../Pages/FlightHotel'
import Flights from '../Pages/Flights'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import SignIn from '../Pages/SignIn'
import Stays from '../Pages/Stays'


function MainRoutes (){
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flightsHotels" element={<FlightHotel />} />
        <Route path="/carRentals" element={< CarRentals/>} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/airportTaxis" element={<Airport />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='*'  element={<img src="https://cdn.dribbble.com/users/1190086/screenshots/7780963/media/02564c983af71888c5ba1091cb136101.gif" alt='Error 404' width="100%" height="60%"/>} />
    </Routes>
  )
}

export default MainRoutes