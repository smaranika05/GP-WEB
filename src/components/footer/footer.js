import React from "react";
import logo1 from "./../../assets/img/logo_1.png";
import "./footer.scss";
import logo from "./../../assets/img/logo.png";
import PP from "./../../views/PrivacyPolicy/pp";
import Imp from "./../../views/Impressum/impressum";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="logo">
        <picture>
          <img src={logo} alt="logo" />
        </picture>
      </div>

      <div className="Address">
        <p>Kissinger Straße 42</p>
        <p>97762 Hammelburg</p>
        <p>09732/1247</p>
        <p>praxisdrdettner@t-online.de</p>
      </div>

      <div className="one">
        <p>
          <a>
            <Link to="/privacy">Datenschutzerklärung</Link>
          </a>
        </p>
        <Route exact path="/Privacy" component={PP} />

        <p>
          <a>
            <Link to="/Imp">Impressum</Link>
          </a>
        </p>
        <Route exact path="/Imp" component={Imp} />

        <p>Absichtserklärung</p>
      </div>

      <div className="border"></div>

      <div className="year">
        <p>© 2020 Praxis Dr. Dettner</p>
      </div>

      <div className="last">
        <p>Entwickelt von softsourced</p>
      </div>
    </div>
  );
}

export default Footer;
