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
      <div>
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
            Da Dr. med. Dettner auch nicht jünger wird, würde er sich über eine
            Nachfolgerin oder einen Nachfolger freuen.<br></br>
            Sie sind Allgemeinärztin oder Allgemeinarzt?
            <br></br>
            Herrn Dr. med. Dettner stünde ggf. bereit, die Praxis mit Ihnen in
            einer Übergangsphase gemeinsam zu unterhalten, bevor diese von Ihnen
            übernommen wird.
          </p>
          <p>
            Sollte eine mögliche Nachfolge Ihr Interesse wecken, so melden Sie
            sich bitte unter ottmar.dettner@t-online.de , Herr Dettners privater
            E-Mail-Adresse. Idealerweise geben Sie Ihre private Rufnummer mit
            an.
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default About;
