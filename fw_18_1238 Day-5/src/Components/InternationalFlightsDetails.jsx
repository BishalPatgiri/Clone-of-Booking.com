import React from "react";
import photo from "../Data/images/ligage.PNG";
const InternationalFlightsDetails = ({
  image,
  company,
  t1,
  t2,
  t3,
  t4,
  price,
}) => {
  return (
    <div className="layout">
      <div className="layout1">
        <div className="a1">
          <div
            style={{
              height: "70%",
              width: "100%",
              //   border: "1px solid black",
            }}
          >
            <img
              style={{ padding: "20px 10px 10px 20px" }}
              src={image}
              alt=""
              width="70%"
            />
          </div>
          <div
            style={{
              height: "30%",
              width: "100%",
              //   border: "1px solid black",
            }}
          >
            <p style={{ marginTop: "5px", marginLeft: "15px" }}>{company}</p>
          </div>
        </div>
        <div className="b11">
          <div
            style={{
              height: "100%",
              width: "100%",
              //   border: "1px solid black",
            }}
          >
            <b style={{ marginLeft: "15px", marginTop: "35px" }}>{t1}</b>
            <div style={{ marginTop: "35px", marginLeft: "15px" }}>
              <p style={{ fontSize: "12px" }}> AMD . Aug 30</p>
            </div>
          </div>
        </div>
        <div className="c1">
          <div style={{ height: "50%" }}>
            <p style={{ marginTop: "25px", marginLeft: "60px" }}>3h 00m</p>
          </div>
          <div
            style={{
              height: "50%",
              border: "1px solid grey",
              borderRight: "none",
              borderLeft: "none",
              borderBottom: "none",
            }}
          >
            <p style={{ marginTop: "2px", marginLeft: "65px" }}>Direct</p>
          </div>
        </div>
        <div className="d1">
          <div
            style={{
              height: "50%",
              //   border: "1px solid black";
            }}
          >
            <b style={{ paddingTop: "25px", marginLeft: "10px" }}>{t2}</b>
          </div>
          <div
            style={{
              height: "50%",
              //   border: "1px solid black",
            }}
          >
            <p
              style={{ marginTop: "12px", marginLeft: "5px", fontSize: "12px" }}
            >
              DXB . Aug 29
            </p>
          </div>
        </div>
        <div className="e1">
          <div style={{ height: "50%" }}>
            <img style={{ marginLeft: "75px" }} src={photo} alt="" />
          </div>
          <div style={{ height: "50%", marginLeft: "5px" }}>
            <p style={{ marginTop: "5px" }}>
              Included: carry on bag, checked bag
            </p>
          </div>
        </div>
      </div>
      <div className="layout2">
        <div className="a1">
          <div
            style={{
              height: "70%",
              width: "100%",
              //   border: "1px solid black",
            }}
          >
            <img
              style={{ padding: "20px 10px 10px 20px" }}
              src={image}
              alt=""
              width="70%"
            />
          </div>
          <div
            style={{
              height: "30%",
              width: "100%",
              //   border: "1px solid black",
            }}
          >
            <p style={{ marginTop: "5px", marginLeft: "15px" }}>IndiGo</p>
          </div>
        </div>
        <div className="b11">
          <div
            style={{
              height: "100%",
              width: "100%",
              marginTop: "5px",
              //   border: "1px solid black",
            }}
          >
            <b style={{ marginLeft: "15px", marginTop: "45px" }}>{t3}</b>
            <div style={{ marginTop: "35px", marginLeft: "15px" }}>
              <p style={{ fontSize: "12px" }}>DXB . Sept 5</p>
            </div>
          </div>
        </div>
        <div className="c1">
          <div
            style={{
              height: "50%",
              //   border: "1px solid black",
            }}
          >
            <p style={{ marginTop: "25px", marginLeft: "60px" }}>3h 05m</p>
          </div>
          <div
            style={{
              height: "50%",
              border: "1px solid grey",
              borderRight: "none",
              borderLeft: "none",
              borderBottom: "none",
            }}
          >
            <p style={{ marginTop: "2px", marginLeft: "65px" }}>Direct</p>
          </div>
        </div>
        <div className="d1">
          <div
            style={{
              height: "50%",
            }}
          >
            <b style={{ paddingTop: "25px", marginLeft: "10px" }}>{t4}</b>
          </div>
          <div
            style={{
              height: "50%",
            }}
          >
            <p
              style={{ marginTop: "12px", marginLeft: "5px", fontSize: "12px" }}
            >
              AMD . Sept. 5
            </p>
          </div>
        </div>
        <div className="e1">
          <div style={{ height: "50%" }}>
            <div style={{ marginTop: "15px", marginLeft: "40px" }}>
              <b>INR {price}</b>
              <p>Including all the taxes</p>
            </div>
          </div>
          <div style={{ height: "50%" }}>
            <div
              style={{
                margin: "auto",
                paddingLeft: "35px",
                paddingTop: "5px",
                paddingBottom: "10px",
                paddingRight: "0px",
                width: "100%",
                height: "85%",
              }}
            >
              <button className="bookFlight">See Flight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalFlightsDetails;
