import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {Link} from "react-router-dom"

export const Slideshow = ({ image, no }) => {
  return (
    <div className="slide-container">
      <Slide slidesToShow={no} autoplay={false}>
        {image.map((slideImage, index) => (
          <Link to={`/explore${slideImage.caption}`} key={index}>
          <div className="each-slide" key={index}>
            <div
              style={{
                height: "auto",
                marginRight: "10px",
              }}
            >
              <img src={slideImage.url} alt="v"/>
              <h3 style={{ fontWeight: "bold" }}>{slideImage.caption}</h3>
              <h3 style={{ fontWeight: "400" }}>{slideImage.property}</h3>
            </div>
          </div>
          </Link>
        ))}
      </Slide>
    </div>
  );
};
