import { LockIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const travel=[
    {
    title :"Genuius",
    des :"mandloi, you're at Genius Level 1 in our loyalty programme"
},
{
    title :"10% discounts",
    des :"Enjoy discounts at participating properties worldwide"
},
{
    title :"15% discounts",
    des :"Complete 5 stays to unlock Genius Level 2"
    
},
{
    title :"Free breakfasts",
    des :"Complete 5 stays to unlock Genius Level 2"
},
{
    title :"Free room upgrades",
    des :"Complete 5 stays to unlock Genius Level 2"
},
]

export const TravelSlide = ({ image, no }) => {
  return (
    <div className="slide-container">
      <Slide slidesToShow={no} autoplay={false}>
        {travel.map((travel, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                height: "auto",
                marginRight: "20px",
                marginLeft:"20px",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                border:"1px solid grey"
              }}
            >
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <h2 style={{ fontWeight: "bold" ,}}>{travel.title}</h2>
              <LockIcon marginRight={"10px"}  marginTop={"5px"}/>
              </div>
              <h3 style={{ fontWeight: "500" }}>{travel.des}</h3>
              {/* <h3 style={{ fontWeight: "400" }}>{slideImage.property}</h3> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
