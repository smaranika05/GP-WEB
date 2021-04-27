import React, { Component } from "react";
import building from "./../../assets/img/building.jpg";
import Footer from "./../../components/footer/footer";
import "./Address.scss";
import "./../../views/Heading.scss";
class Address extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="addr">
        <div className="addr_wrapper">
          <div className="header"> HIER FINDEN SIE UNS </div>
          <div className="border"></div>
          <div className="top_wrapper">
            <div className="descNimg">
              <p style={{ color: "#5ECD73" }}>Praxisbezeichnung</p>
              <p>Praxis Dr. Dettner</p>
              <br></br>
              <p style={{ color: "#5ECD73" }}>Name</p>
              <p>Herr Dr. med. Ottmar Dettner</p>
              <br></br>
              <p style={{ color: "#5ECD73" }}>Facharztbezeichnung</p>
              <p>Facharzt für Allgemeinmedizin</p>
              <br></br>
              <p style={{ color: "#5ECD73" }}>Adresse</p>
              <p> Kissinger Str. 42</p>
              <p>97762 Hammelburg</p>
              <br></br>
              <p>1. Stock - Treppenaufgang</p>
              <br></br>
              <p style={{ color: "#5ECD73" }}>Telefon</p>
              <p> 09732-1247</p>
              <br></br>
              <p style={{ color: "#5ECD73" }}>Telefax</p>
              <p> 09732-1869</p>
              <br></br>
              
            </div>
            <div className="building" name-member="building">
              <img src={building} alt="building" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Address;





