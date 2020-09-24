import React, { Component } from "react";
import docroom from "./../../assets/img/header-bg.jpg";

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
            <div className="btn_one">
              <div className="btn_txt_one">Erfahren Sie mehr über uns.</div>

              
                <a className="btn_one_in" href="#praxisteam"></a>
             
            </div>
            <br></br>
            <div className="btn_two">
              <div className="btn_txt_two">
                Leistungen, die wir für Sie anbieten.
              </div>
              <a className="btn_two_in" href="/service"></a>
            </div>
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