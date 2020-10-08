import React from "react";
import logo3 from "./../../assets/img/logo3.png";
import "./footer.scss";
//import logo2 from "./../../assets/img/logo2.png";
// import PP from "./../../views/PrivacyPolicy/pp";
// import Imp from "./../../views/Impressum/impressum";
import logo from "./../../assets/img/softy_logo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div class="footer_wrap">
        <div class="logo_footer">
          <img src={logo3} alt="logo" />
        </div>
        <div class="address">
          <p>Kissinger Straße 42</p>
          <p>97762 Hammelburg</p>
          <p>09732/1247</p>
          <p>praxisdrdettner@t-online.de</p>
        </div>
        <div class="links">
          <p>
            <Link to="/privacy">Datenschutzerklärung</Link>
          </p>
          <br></br>
          {/* <Route exact path="/Privacy" component={PP} /> */}
          <p>
            <Link to="/Imp">Impressum</Link>
          </p>
          {/* <Route exact path="/Imp" component={Imp} /> */}
        </div>
      </div>
      <div className="divider"></div>
      <div className="end_line">
        <div className="left">© 2020 Praxis Dr. Dettner</div>
        <div className="right">
          Entwickelt von{" "}
          <a
            href="https://softsourced.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
