import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Slideshow = ({ image, no }) => {
  return (
    <div className="slide-container">
      <Slide slidesToShow={no} autoplay={false}>
        {image.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                height: "auto",
                marginRight: "10px",
              }}
            >
              <img src={slideImage.url} />
              <h3 style={{ fontWeight: "bold" }}>{slideImage.caption}</h3>
              <h3 style={{ fontWeight: "400" }}>{slideImage.property}</h3>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
