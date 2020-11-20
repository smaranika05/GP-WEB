import React, { Component } from "react";

import image from "./../../assets/img/image.png";
//import { Container } from "@material-ui/core";
import "./team.scss";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Footer from "./../../components/footer/footer";
import "./../../views/Heading.scss";
class Team extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <>
        <div className="team_wrapper">
          <div className="wrap_content">
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
                  Mit unseren Patientinnen sowie untereinander pflegen wir einen
                  vertrauensvollen, von Aufmerksamkeit und Respekt geprägten
                  Umgang. Das Praxisteam besteht seit 2005 in der jetzigen
                  Konstellation. Unsere Patienten wissen unser eingespieltes
                  Team zu schätzen. Unser Team, von links nach rechts:
                </p>
                <ul className="content_list">
                  <li>Gabi Schulz, Arzthelferin. Im Praxisteam seit 1995.</li>

                  <li>
                    Dr. Ottmar Dettner, Allgemeinarzt.{" "}
                    <Link to="/arztprofil">
                      Zum Profil→
                    </Link>
                  </li>
                  <li>
                    Ute Dettner, Krankenschwester. Im Praxisteam seit 1993.
                  </li>
                  <li>Conny Stähr, Arzthelferin. Im Praxisteam seit 2005.</li>
                  <li>
                    Sandra Zimmermann, Arzthelferin. Im Praxisteam seit 2003.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Team;
