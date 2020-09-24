import React from "react";
import Home from "../../views/HomePage/HomePage";
import Team from "../../views/Teams/team";
import Service from "../../views/Service/service";
import Contact from "../../views/address/Address";
import About from "../../views/About/about";
import PP from "../../views/PrivacyPolicy/pp";
import Imp from "../../views/Impressum/impressum";
import "./header.scss";
import logo from "./../../assets/img/logo.png";
import Root from "../../views/Root/Root";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="logo">
          <picture>
            <img src={logo} alt="logo" />
          </picture>
        </div>
        <ul className="navi">
          <Link to="/">
            <li>
              <a href="/#room">Home</a>
            </li>
          </Link>

          <li>
            {" "}
            <a href="/#praxisteam">Praxisteam</a>
          </li>

          <li>
            {" "}
            <a href="/#time">Sprechzeiten</a>
          </li>

          <li>
            {" "}
            <Link to="/service">Leistungsspektrum</Link>
          </li>

          <li>
            {" "}
            <Link to="/Address">Kontakt</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/About" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/Address" component={Contact} />
        <Route exact path="/privacy" component={PP} />
        <Route exact path="/Imp" component={Imp} />
        <Route exact path="/Root" component={Root} />
        
        {/* <Route path="" component={}/> */}
      </Router>
    );
  }
}

export default Header;
