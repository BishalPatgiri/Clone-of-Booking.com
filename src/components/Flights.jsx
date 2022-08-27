import React from "react";
import "./Flights.css";
import { Link } from "react-router-dom";
const Flights = ({ image, place, date }) => {
  return (
    <div className="main">
      <Link to="/flights/international">
        <img className="img" src={image} alt="flights"/>
      </Link>
      <div className="des">
        <div className="place">
          <b>{place}</b>
        </div>
        <div className="place">
          <p style={{ marginTop: "2px", color: "grey" }}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Flights;
