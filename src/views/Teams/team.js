import React, { Component } from "react";

import image from "./../../assets/img/image.png";
//import { Container } from "@material-ui/core";
import "./team.scss";
import Footer from "./../../components/footer/footer";
import "./../../views/Heading.scss";
class Team extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="team_wrapper">
        <div className="header">Das Praxisteam</div>
        <div className="border"></div>
        <div>
          <div className="image_team">
            <picture>
              <img src={image} alt="teams " />
            </picture>
          </div>

          <div className="content_team">
            <p>
              Mit unseren PatientINNEN sowie untereinander pflegen wir einen
              vertrauensvollen, von Aufmerksamkeit und Respekt geprägten Umgang.
              Das Praxisteam besteht seit 2007 in der jetzigen Konstellation.
              Unsere PatientINNEN wissen unser eingespieltes Team zu schätzen.
              Unser Team, von links nach rechts:
            </p>
            <ul className="content_list">
              <li>Gabi Schulz, Arzthelferin. Im Praxisteam seit 1995.</li>

              <li>
                Dr. Ottmar Dettner, Allgemeinarzt.{" "}
                <a href="/arztprofil">Zum Profil→</a>
              </li>
              <li>Ute Dettner, Krankenschwester. Im Praxisteam seit 1993.</li>
              <li>Conny Stähr, Arzthelferin. Im Praxisteam seit 2005.</li>
              <li>Sandra Zimmermann, Arzthelferin. Im Praxisteam seit 2003.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;
