import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CreatePassword } from '../Components/CreatePassword'
import { ExploreGoa } from '../Components/ExploreGoa'
import { ExploreMumbai } from '../Components/ExploreMumbai'
import { Regsiter } from '../Components/Regsiter'
import Airport from '../Pages/Airport'
import Attractions from '../Pages/Attractions'
import CarRentals from '../Pages/CarRentals'
import Flight from '../Pages/Flight'
import FlightHotel from '../Pages/FlightHotel'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import Stays from '../Pages/Stays'
import PinMain from '../Pin/PinMain'
import InternationalFlights from "../Pages/InternationalFlights"


function MainRoutes (){
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/flights" element={<Flight />} />
        <Route path="/flightsHotels" element={<FlightHotel />} />
        <Route path="/carRentals" element={< CarRentals/>} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/airportTaxis" element={<Airport />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/register' element={<Regsiter />} />
        <Route path='/createPassword' element={<CreatePassword />} />
        <Route path='/pin' element={<PinMain />} />
        <Route path='/exploreGoa' element={<ExploreGoa />} />
        <Route path='/exploreMumbai' element={<ExploreMumbai />} />
        <Route
        path="/flights/international/"
        element={<InternationalFlights />}
      />
        <Route path='*'  element={<img src="https://cdn.dribbble.com/users/1190086/screenshots/7780963/media/02564c983af71888c5ba1091cb136101.gif" alt='Error 404' width="100%" height="60%"/>} />
    </Routes>
  )
}

export default MainRoutes