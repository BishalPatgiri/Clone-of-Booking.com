import React from "react";
import "./FlightBooking.css";
import FlightDetails from "../Components/FlightDetails";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar";
import FooterEveryPage from "../Components/Footer/FooterEveryPage";

const FlightBooking = () => {
  const [flightData, setFlightData] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const option = e.target.value;
    let newCompany = [...company];
    if (company.includes(option)) {
      newCompany.splice(newCompany.indexOf(option), 1);
    } else {
      newCompany.push(option);
    }
    setCompany(newCompany);
  };
  useEffect(() => {
    setFlightData([]);
    setLoading(true);
    axios
      .get("https://sumitfirstapi.herokuapp.com/flightsearch", {
        params: { company: company, _sort: sort && "price", _order: sort },
      })
      .then((res) => {
        setLoading(false);
        setFlightData(res.data);
      });

    setSearchParams({
      Airliness: company,
    });
  }, [company, sort,setSearchParams]);

  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          backgroundColor: "whitesmoke",
          padding: "10px",
        }}
      >
        <div
          style={{
            width: "70%",
            // margin: "auto",
            marginLeft: "350px",
            // height: "250px",
            backgroundColor: "whiteSmoke",
          }}
        >
          <SearchBar />
        </div>
      </div>
      <div className="mainbooking">
        <div className="filtering">
          <div style={{}}>
            <h3>Filters</h3>
            <p>Showing {flightData.length} results</p>
          </div>
          <div style={{ marginTop: "25px" }}>
            <b>Airliness</b>
            <div>
              <input
                type="checkBox"
                value="Air India"
                onChange={handleChange}
              />
              <label>Air India</label>
            </div>
            <div>
              <input type="checkBox" value="Go First" onChange={handleChange} />
              <label>Go First</label>
            </div>
            <div>
              <input type="checkBox" value="IndiGo" onChange={handleChange} />
              <label>IndiGo</label>
            </div>
            <div>
              <input type="checkBox" value="Vistara" onChange={handleChange} />
              <label>Vistara</label>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <b>Sort by Price</b>
            <div>
              <input
                type="radio"
                name="sort"
                value="asc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label>From low to high</label>
            </div>
            <div>
              <input
                type="radio"
                name="sort"
                value="desc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label>From high to low</label>
            </div>
          </div>
        </div>

        <div className="ticket">
          {loading && (
            <div style={{ marginLeft: "205px" }}>
              <img src="https://c.tenor.com/qsdblRVNZysAAAAC/flying-airplane.gif" alt="i"/>
            </div>
          )}
          {flightData.map((ele) => (
            <FlightDetails
              key={ele.id}
              image={ele.image}
              company={ele.company}
              t1={ele.t1}
              t2={ele.t2}
              t3={ele.t3}
              t4={ele.t4}
              price={ele.price}
            />
          ))}
        </div>
      </div>
      <FooterEveryPage />
    </div>
  );
};

export default FlightBooking;
