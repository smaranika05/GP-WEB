import React, { Component } from "react";
import "./Covidpage.scss";
import Doc2 from "./../../assets/img/Covid2.png";
import Footer from "./../../components/footer/footer";

class Covid extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <>
      
        <div className="Kollege_wrapper">
          <div className="left_content">
            <div className="button"></div>
          </div>
          <div className="image">
            <img src={Doc2} alt="doc2" />
          </div>
          <div className="right_content">
            <div className="content">
              <p class="box-text">
              Wir rufen unsere Patient*innen an, sobald wir ein Impfangebot machen können. Wir bitten daher höflichst darum, von telefonischen und schriftlichen Anfragen mit Bitte zur Corona-Impfung abzusehen. Jede Patientin und jeder Patient wird früher oder später entweder von uns oder beim Impfzentrum geimpft werden können.
              </p>
              <p>
              Liebe Patientinnen und Patienten,</p>

<p>Die Praxis Dr. Dettner erhält gerade sehr viele Anfragen von unseren geschätzten Patient*innen mit der Frage nach bzw. Bitte um einen frühestmöglichen Impftermin. </p>

<p>Wir verstehen es nur zu gut, dass unsere Patient*innen möglichst früh geimpft werden wollen, um einen Schutz vor Covid-19 zu haben.</p>

<p>Deswegen versuchen wir im Rahmen unserer Belastbarkeitsgrenze möglichst viel zu impfen.</p>

<p>Unsere Impfreihenfolge basiert auf den Kriterien Alter und Krankheitsgeschichte, sodass die Betagten und Vorerkrankten relativ zuerst drankommen.</p>

<p>Unseren Patient*innen empfehlen wir, sich bitte parallel beim Impfzentrum vom Landkreis Bad Kissingen zur Corona-Impfung zu registrieren. Hierüber erhalten Sie evtl. schon einen früheren Impftermin: <a style={{color:"#4CAF50"}} href="https://impfzentren.bayern/citizen/"> https://impfzentren.bayern/citizen/ </a>

 Sobald die Regierung die Impfpriosierung aufhebt, werden wir ggf. unsere Informationen aktualisieren.
              </p>
            
            </div>
          </div>
       
</div>
        {/* <Footer /> */}
      </>
    );
  }
}
export default Covid;
