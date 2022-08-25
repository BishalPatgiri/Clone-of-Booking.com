import React from "react";
import "./Flights.css";
const Trending = ({ image, place, date, description }) => {
  return (
    <div className="main">
      <img className="img" src={image} />

      <div className="des">
        <div className="place">
          <b>{place}</b>
        </div>
        <div className="place">
          <p style={{ marginTop: "2px", color: "grey" }}>{description}</p>
          <p style={{ marginTop: "2px", color: "grey" }}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
