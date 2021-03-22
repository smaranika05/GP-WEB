import React from "react";
import logo3 from "./../../assets/img/logo3.png";
import "./footer.scss";
//import logo2 from "./../../assets/img/logo2.png";
// import PP from "./../../views/PrivacyPolicy/pp";
// import Imp from "./../../views/Impressum/impressum";
import logo from "./../../assets/img/white-softy.svg";
import logoAppleute from "./../../assets/img/appleute_full_white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer_main"
      style={{ color: "#7b7b7b", background: "#1a1a1a" }}
    >
      <div class="footer_wrap">
        <div class="logo_footer">
          <img src={logo3} alt="logo" />
        </div>
        <div class="address">
          <div className="align">
            <p>Kissinger Straße 42</p>
            <p>97762 Hammelburg</p>
            <p>09732-1247</p>
            <p>dr.dettner@gmail.com</p>
          </div>
        </div>
        <div class="links">
          <p>
            <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
          </p>

          <p>
            <Link to="/impressum">Impressum</Link>
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="end_line">
        <div className="left">© 2020 Praxis Dr. Dettner</div>
        <div className="right">
          Entwickelt von
          <a
            href="https://www.appleute.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoAppleute} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
