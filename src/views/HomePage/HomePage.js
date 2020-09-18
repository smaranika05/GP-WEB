import React, { Component } from "react";
//import { HashLink as Link } from "react-router-hash-link";
import ScrollItem from "./../opacity/index";
import docroom from "./../../assets/img/header-bg.jpg";
import docteam from "./../../assets/img/Doc_team.png";
import doctor from "./../../assets/img/individual_pic.jpg";
import waiting from "./../../assets/img/Wating_Room.png";
import vector from "./../../assets/img/Vector.png";
import Team from "./../../views/Teams/team";
import Home from "./../../views/HomePage/HomePage";
import About from "./../../views/About/about";

import Service from "./../../views/Service/service";
import Contact from "./../../views/address/Address";
//import { Route, Link } from "react-router-dom";
import "./Main.scss";
// import Header from "./components/header/header";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./../../components/footer/footer";
class App extends Component {
  render() {
    return (
      <div>
        <div className="docapp">
          <div className="doctorRoom">
            <div className="docContent">
              <h1>Wir sind für Sie da.</h1>
            </div>
            <div className="sub">
              <p>
                Seit 1993 sorgen wir, das Team der Allgemeinarztpraxis Dr. med.
                <br></br>Dettner, uns um das gesundheitliche Wohl unserer
                PatientINNEN.
              </p>
            </div>
            <div className="btn_one">
              <div>
                <span className="btn_txt_one">Erfahren Sie mehr über uns.</span>
              </div>

              <div>
                <a className="btn_one_in" href="#team"></a>
              </div>
            </div>

            <div className="btn_two">
              <div>
                <span className="btn_txt_two">
                  Leistungen, die wir für Sie anbieten.
                </span>
              </div>
              <Router>
                <div>
                  <button className="btn_two_in" const path="/servic"></button>
                </div>
              </Router>
            </div>

            <picture>
              <source srcset={docroom} type="image/webp" />
              <img src={docroom} alt="docroom" />
            </picture>
          </div>

          <div className="team" id="team">
            <h1>Das Praxisteam</h1>
          </div>

          <div className="praxisteam">
            <ScrollItem>
              <div className="team_scroll_text">
                <div className="tm_head">Unser Praxisteam</div>
                <div className="tm_content">
                  Wir haben die Allgemeinarztpraxis Dr. med. Dettner im Jahre
                  1993 gegründet. Bis heute liegt es uns am Herzen, dass unsere
                  PatientINNEN optimal versorgt werden. Uns ist es wichtig, dass
                  Sie sich bei uns gut aufgehoben fühlen.
                </div>
                <div className="team_btn"></div>
                <div className="tm_sub">
                  <a>
                    <Link to="/team">Mehr übers Praxisteam</Link>
                    <Route exact path="/team" component={Team} />
                  </a>
                </div>
                <div className="tm_border"></div>
              </div>
            </ScrollItem>
          </div>

          <div className="sprechzeiten" id="timing">
            <h1>Sprechzeitens</h1>
          </div>

          <div className="btn">
            <table>
              <tr>
                <td>
                  <button className="button">Montag</button>
                </td>
                <td>
                  <button className="button">Dienstag</button>
                </td>
                <td>
                  <button className="button">Mittwoch</button>
                </td>
                <td>
                  <button className="button">Donnerstag</button>
                </td>
                <td>
                  <button className="button">Freitag</button>
                </td>
              </tr>

              <tr>
                <td>08:00–12:00</td>
                <td>08:00–12:00</td>
                <td>08:00–12:00</td>
                <td>08:00–12:00</td>
                <td>08:00–14:00</td>
              </tr>
              <tr>
                <td>16:00–18:30</td>
                <td>15:00–17:00</td>
                <td></td>
                <td>16:00–18:30</td>
              </tr>
            </table>
          </div>

          <div class="doctor" id="doctor">
            <h1>Dr. med. Ottmar Dettner</h1>
          </div>

          <div className="docImage">
            <ScrollItem>
              <div className="doc_scroll_text">
                <div className="head">Dr. med. Ottmar Dettner</div>
                <div className="content">
                  Als Allgemeinarzt ist Herr Dr. med. Ottmar Dettner seit mehr
                  als 25 Jahren mit eigener Praxis in Hammelburg niedergelassen.
                </div>
                <div className="doc_btn" href={"About"}></div>
                <div className="sub">
                  <a>
                    <Link to="/about">Mehr zu Person und Nachfolgersuche</Link>
                    <Route exact path="/about" component={About} />
                  </a>
                </div>
                <div className="border"></div>
              </div>
            </ScrollItem>
          </div>

          <div>
            <div className="waiting" id="waiting">
              <picture>
                <source srcset={waiting} type="image/webp" />
                <img src={waiting} alt="doctor" />
              </picture>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
