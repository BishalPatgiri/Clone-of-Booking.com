import React from "react";
import "./Faqs.css";
const Faqs = ({ heading, description }) => {
  return (
    <div className="faq_des">
      <b>{heading}</b>
      <p style={{ marginTop: "10px" }}>{description}</p>
    </div>
  );
};

export default Faqs;
