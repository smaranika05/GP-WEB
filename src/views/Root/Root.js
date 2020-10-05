import React, { Component } from "react";
import docroom from "./../../assets/img/x.png";
import { MdLocationOn } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import "./Root.scss";
class Root extends Component {
  render() {
    return (
      <div>
        <div className="doctorRoom">
          <div className="left_content">
            <h1>Wir sind für Sie da.</h1>
            <p style={{ fontFamily: "lato", fontSize: "16px" }}>
              Seit 1993 sorgen wir, das Team der Allgemeinarztpraxis Dr. med.
              <br></br>Dettner, uns um das gesundheitliche Wohl unserer
              Patientinnen.
            </p>
            <a className="btn_one" href="#praxisteam">
              <div className="btn_txt_one">Erfahren Sie mehr über uns.</div>
              <div className="btn_one_in" href="#praxisteam"></div>
            </a>

            <br></br>
            <a className="btn_two" href="/service">
              <div className="btn_txt_two">
                Leistungen, die wir für Sie anbieten.
              </div>
              <div className="btn_two_in"></div>
            </a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p
              style={{
                fontFamily: "lato",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CgPhone size="20px" color="#5ecd73" />
              09732-1247
            </p>
            <p
              style={{
                fontFamily: "lato",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdLocationOn size="22px" color="#5ecd73" />
              Kissinger Str. 42, 97762 Hammelburg
            </p>
          </div>
          <div className="right_content">
            <img src={docroom} alt="docroom" />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  }
}

export default Root;
