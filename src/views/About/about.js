import React, { Component } from "react";

import doctor from "./../../assets/img/ultrasound.jpg";
import Footer from "./../../components/footer/footer";
import "./about.scss";

class About extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="abt">
        <div className="abt_wrapper">
        <div className="image_doc" name-member="doctor">
          <picture>
            <img src={doctor} alt="doctor" />
          </picture>
        </div>

        <div className="content_doc">
          <p>
            Im Jahr 1975 machte Ottmar Dettner das Abitur und studierte
            nachfolgend Medizin in Marburg, München und Bremen. Er promovierte
            in Würzburg. In seiner Doktorarbeit befasste er sich mit der
            Entstehung der Parkinson-Krankheit. Nach Tätigkeiten im Bereich der
            Inneren Medizin, Chirurgie und Neurologie schloss er 1992 die
            Weiterbildung zum Facharzt der Allgemeinmedizin ab. Ein Jahr später
            ließ er sich als Allgemeinarzt (Hausarzt) in Hammelburg nieder, wo
            er nach wie vor mit Freude praktiziert.
            </p>          
        </div>
        {/* <Footer /> */}
      </div>
      </div>
    );
  }
}
export default About;
