import React from "react";
import "./Filter.css";
import SearchBar from "../Components/SearchBar";
import Flights from "../Components/Flights";
import { PopularFlights } from "../Data/PopularFlights";
import { Domestic } from "../Data/Domestic";
import { useState } from "react";
import { TrendingCities } from "../Data/TrendingCities";
import Trending from "../Components/Trending";
import {
  faAlignJustify,
  faMagnifyingGlass,
  faPlaneDeparture,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Filter = () => {
  const [da, setDa] = useState(PopularFlights);

  const handleDomestic = () => {
    setDa(Domestic);
  };
  const handleInternational = () => {
    setDa(PopularFlights);
  };
  return (
    <div>
      <div className="box1">
        <div className="corona">
          Coronavirus (COVID-19) may affect your travel plans.
          <a
            href="https://www.booking.com/covid-19.html?lang=en-us&amp;aid=304142&amp;label=gen173nr-1DEgdmbGlnaHRzKIICQgVpbmRleEgJWARobIgBAZgBCbgBF8gBDNgBA-gBAfgBBogCAagCA7gCvbHxjgbAAgHSAiQ3MGRjYWNmYi1mZWI2LTQ5MTUtYmY5My1mMTJhMzM5OGEwZjPYAgTgAgE"
            target="_blank"
          >
            Learn more
          </a>
        </div>
        <div>
          <h1>Compare and book flights with ease</h1>
          <p>Discover your next dream destination</p>
        </div>
        <SearchBar />
      </div>
      <div className="box2">
        <div>
          <h1>Popuar flights near you</h1>
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
          <h1>Trending Cities</h1>
          <p style={{ color: "grey" }}>
            Book flights to a destination popular with travelers from India
          </p>
        </div>
        {/* <div className="topFlights" style={{ marginTop: "30px" }}>
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
      <div className="box3">
        <div className="b1">
          <div style={{ width: "20%", height: "100%" }}>
            <FontAwesomeIcon icon={faAlignJustify} className="icon" />
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
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
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
            <FontAwesomeIcon icon={faPlaneUp} className="icon" />
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
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
