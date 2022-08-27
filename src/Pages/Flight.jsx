import React from "react";
import "./Flight.css";
import SearchBar from "../Components/SearchBar";
import Flights from "../Components/Flights";
import { PopularFlights } from "../Data/PopularFlights";
import { Domestic } from "../Data/Domestic";
import { useState } from "react";
import { TrendingCities } from "../Data/TrendingCities";
import Trending from "../Components/Trending";
import { Europe } from "../Data/Europe";
import { Africa } from "../Data/Africa";
import { Oceania } from "../Data/Oceania";
import { NorthAmerica } from "../Data/NorthAmerica";
import { Asia } from "../Data/Asia";
import { Faq } from "../Data/Faq";
import { Heading } from "@chakra-ui/react";
import {
  faAlignJustify,
  faMagnifyingGlass,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Worldwide from "../Components/Worldwide";
import Faqs from "../Components/Faqs";
import Navbar from "../Components/Navbar/Navbar";
import FooterEveryPage from "../Components/Footer/FooterEveryPage";
const Flight = () => {
  const [da, setDa] = useState(PopularFlights);
  const [data, setData] = useState(Europe);
  const handleDomestic = () => {
    setDa(Domestic);
  };
  const handleInternational = () => {
    setDa(PopularFlights);
  };
  const handleEurope = () => {
    setData(Europe);
  };
  const handleAfrica = () => {
    setData(Africa);
  };
  const handleOceania = () => {
    setData(Oceania);
  };
  const handleNorthAmerica = () => {
    setData(NorthAmerica);
  };
  const handleAsia = () => {
    setData(Asia);
  };
  return (
    <div>
      <Navbar />

      <div className="sbox1">
        <div className="corona">
          Coronavirus (COVID-19) may affect your travel plans.
          <a
            href="https://www.booking.com/covid-19.html?lang=en-us&amp;aid=304142&amp;label=gen173nr-1DEgdmbGlnaHRzKIICQgVpbmRleEgJWARobIgBAZgBCbgBF8gBDNgBA-gBAfgBBogCAagCA7gCvbHxjgbAAgHSAiQ3MGRjYWNmYi1mZWI2LTQ5MTUtYmY5My1mMTJhMzM5OGEwZjPYAgTgAgE"
            target="blank"
            style={{color:"#0071C2",marginLeft:"10px",textDecoration:"underline"}}
          >
            Learn more
          </a>
        </div>
        <div>
          <Heading style={{fontSize:"30px",marginTop:"25px",color:"#444"}}>Compare and book flights with ease</Heading>
          {/* <h1>Compare and book flights with ease</h1> */}
          <p style={{marginTop:"18px"}}>Discover your next dream destination</p>
        </div>
        <SearchBar />
      </div>
      <div className="sbox2">
        <div>
          <Heading>Popuar flights near you</Heading>
          {/* <h1>Popuar flights near you</h1> */}
          <p style={{ color: "grey" }}>
            Find deals on domestic and international flights
          </p>
        </div>
        <div style={{ marginTop: "30px" }}>
          <button onClick={handleInternational} className="dom">
            International
          </button>
          <button onClick={handleDomestic} className="dom">
            Domestic
          </button>
        </div>
        <div className="topFlights">
          {da.map((ele) => (
            <Flights
              key={ele.id}
              image={ele.image}
              place={ele.place}
              date={ele.date}
            />
          ))}
        </div>
        <div style={{ marginTop: "80px" }}>
          <Heading>Trending Cities</Heading>
          <p style={{ color: "grey" }}>
            Book flights to a destination popular with travelers from India
          </p>
        </div>
        <div className="topFlights" style={{ marginTop: "30px" }}>
          {TrendingCities.map((ele) => (
            <Trending
              key={ele.id}
              image={ele.image}
              place={ele.place}
              description={ele.description}
              date={ele.date}
            />
          ))}
        </div>
      </div>
      <div className="sbox3">
        <div className="b1">
          <div style={{ width: "20%", height: "100%" }}>
            <FontAwesomeIcon icon={faAlignJustify} className="sicon" />
          </div>

          <div
            style={{
              width: "80%",
              height: "60%",
              paddingTop: "80px",
            }}
          >
            <b>Huge selection</b>
            <p style={{ marginTop: "10px" }}>
              Easily compare thousands of flights, all in one place
            </p>
          </div>
        </div>
        <div className="b2">
          <div style={{ width: "20%", height: "100%" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="sicon" />
          </div>
          <div
            style={{
              width: "80%",
              height: "60%",
              paddingTop: "80px",
            }}
          >
            <b>No hidden fees</b>
            <p style={{ marginTop: "10px" }}>
              Always know exactly what you’re paying for
            </p>
          </div>
        </div>
        <div className="b3">
          <div style={{ width: "20%", height: "100%" }}>
            <FontAwesomeIcon icon={faPlaneUp} className="sicon" />
          </div>
          <div
            style={{
              width: "80%",
              height: "60%",
              paddingTop: "80px",
            }}
          >
            <b>More flexibility</b>
            <p style={{ marginTop: "10px" }}>
              Keep your travel dates open with flexible plane ticket options
            </p>
          </div>
        </div>
      </div>
      <div className="sbox4">
        <div>
          <Heading>Fly worldwide with Booking.com</Heading>

          <p style={{ color: "grey" }}>
            Flights from wherever you are to wherever you want to go
          </p>
        </div>
        <div style={{ marginTop: "30px" }}>
          <button onClick={handleEurope} className="dom1">
            Europe
          </button>
          <button onClick={handleAfrica} className="dom1">
            Africa
          </button>
          <button onClick={handleOceania} className="dom1">
            Oceania
          </button>
          <button onClick={handleNorthAmerica} className="dom1">
            North America
          </button>
          <button onClick={handleAsia} className="dom1">
            Asia
          </button>
        </div>
        <div className="flyWorldwide">
          {data.map((ele) => (
            <Worldwide
              key={ele.id}
              image={ele.image}
              destination={ele.destination}
              flighttime={ele.flighttime}
            />
          ))}
        </div>
        <div style={{ marginTop: "50px" }}>
          <Heading>Frequently asked questions</Heading>
        </div>
        <div className="faq">
          {Faq.map((ele) => (
            <Faqs
              key={ele.id}
              heading={ele.heading}
              description={ele.description}
            />
          ))}
        </div>
      </div>
      <FooterEveryPage />
    </div>
  );
};

export default Flight;
