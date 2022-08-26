import React from "react";
import { Routes, Route } from "react-router-dom";
import FlightBooking from "../Pages/FlightBooking";
import Flight from "../Pages/Flight";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/flights" element={<Flight />} />
      <Route path="/flights/booking/" element={<FlightBooking />} />

      <Route
        path="*"
        element={
          <img
            src="https://cdn.dribbble.com/users/1190086/screenshots/7780963/media/02564c983af71888c5ba1091cb136101.gif"
            alt="Error 404"
            width="100%"
            height="60%"
          />
        }
      />
    </Routes>
  );
}

export default MainRoutes;
