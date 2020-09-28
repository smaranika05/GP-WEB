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
        <div className="image_doc" name-member="doctor">
          <picture>
            <img src={doctor} alt="doctor" />
          </picture>
        </div>

        <div className="content_doc">
          <p>
            Im Jahr 1974 erlangte Ottmar Dettner sein Abitur und studierte
            nachfolgend Medizin in Marburg. Er promovierte in Würzburg, seine
            Doktorarbeit ging über die Parkinson-Krankheit. Nach Tätigkeiten im
            Bereich der Inneren Medizin und Neurologie schloss er 1992 die
            Weiterbildung zum Facharzt der Allgemeinmedizin ab. Ein Jahr später
            ließ er sich als Allgemeinarzt (Hausarzt) in Hammelburg, in der
            Kissinger Str. 42, nieder, wo er nach wie vor mit Freude
            praktiziert.
          </p>
          <p>
            Dr. med. Dettner würde sich über eine Kollegin oder einen Kollegen
            freuen, die / der sich mit ihm und unserem Team zusammen um das
            Wohlergehen unserer PatientINNEN kümmert.
          </p>
          <p>
            Sie sind Allgemeinärztin oder Allgemeinarzt und haben Interesse
            daran, sich mit Herrn Dr. med. Dettner zusammenzuschließen?
          </p>
          <p>
            So melden Sie sich bitte unter ottmar.dettner@t-online.de, der
            privaten E-Mail-Adresse von Dr. med. Dettner. Idealerweise geben Sie
            bei Ihrer Kontaktaufnahme Ihre private Rufnummer an.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
