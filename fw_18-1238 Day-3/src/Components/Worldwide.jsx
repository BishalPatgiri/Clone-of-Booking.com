import React from "react";
import "./Worldwide.css";
const Worldwide = ({ image, destination, flighttime }) => {
  return (
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
  );
};

export default Worldwide;
