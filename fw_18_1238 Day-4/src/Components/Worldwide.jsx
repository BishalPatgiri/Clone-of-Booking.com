import React from "react";
import "./Worldwide.css";
import { Link } from "react-router-dom";
const Worldwide = ({ image, destination, flighttime }) => {
  return (
    <Link style={{ textDecoration: "none" }} to="/flights/international">
      <div className="test">
        <img
          style={{ borderRadius: "3px" }}
          width="25%"
          height="100%"
          src={image}
        />

        <div
          style={{
            width: "70%",
            marginLeft: "5%",
            height: "100%",
            // border: "1px solid brown",
          }}
        >
          <div style={{ marginTop: "10px" }}>
            <b>{destination}</b>
          </div>
          <div style={{ marginTop: "25px" }}>
            <p style={{ color: "grey" }}> {flighttime} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Worldwide;
