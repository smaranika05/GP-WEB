import React, { Component } from "react";

import "./service.scss";
import "./../../views/Heading.scss";
import Footer from "../../components/footer/footer";

class Service extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="ser">
        <div className="header">Leistungsspektrum</div>
        <div className="border"></div>
        <div className="listing">
          <ul>
            <li>Elektrokardiogramm (EKG): Ruhe , Belastung (Ergometrie)</li>
            <li>Ultraschall: Bauch, Schilddrüse, Knöcheldruckmessung</li>
            <li>Lungenfunktionstest (Spirometrie)</li>
            <li>
              Vorsorgeuntersuchungen: Gesundheitscheck, Hautkrebsvorsorge,
              Krebsvorsorge beim Mann, Stuhltest Darmkrebs
            </li>
            <li>Kleine chirurgische Eingriffe</li>
            <li>
              Disease-Management-Programme (DMP): Diabetes, Asthma / COPD, KHK
            </li>
            <li>Impfungen, Desensibilisierung</li>
            <li>Laboruntersuchungen: Blut, Urin, Stuhl</li>
            <li>Hausbesuche</li>
            <li>Atteste und Gutachten</li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Service;
