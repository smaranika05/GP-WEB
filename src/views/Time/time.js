import React, { Component } from "react";
import "./time.scss";
import { Container } from "@material-ui/core";
class Time extends Component {
  render() {
    return (
      <>
        {/* <div className="timeheading">Sprechzeitens</div> */}

        <div className="btn1">
          <div>
            <button className="button">Montag</button>
            <p>08:00–12:00</p>
            <p>16:00–18:30</p>
          </div>

          <div>
            {" "}
            <button className="button">Dienstag</button>
            <p>08:00–12:00</p>
            <p>15:00–17:00</p>
          </div>

          <div>
            <button className="button">Mittwoch</button>
            <p>08:00–12:00</p>
          </div>

          <div>
            {" "}
            <button className="button">Donnerstag</button>
            <p>08:00–12:00</p>
            <p>16:00–18:30</p>
          </div>

          <div>
            {" "}
            <button className="button">Freitag</button>
            <p>08:00–14:00</p>
          </div>
        </div>
      </>
    );
  }
}
export default Time;
