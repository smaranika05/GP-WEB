import React, { Component } from "react";
import "./Kollege.scss";
import Doc2 from "./../../assets/img/doc2.png";
import Footer from "./../../components/footer/footer";

class Kollege extends Component {
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
              <p>
                Dr. med. Ottmar Dettner würde sich über eine Kollegin oder einen
                Kollegen freuen, die / der sich mit ihm und unserem Team
                zusammen um das Wohlergehen unserer PatientINNEN kümmert.
              </p>
              <p>
                Sie sind Allgemeinärztin oder Allgemeinarzt und haben Interesse
                daran, sich mit Herrn Dr. med. Ottmar Dettner
                zusammenzuschließen?
              </p>
              <p>
                So melden Sie sich gerne telefonisch (09732-1247) oder per
                E-Mail (dr.dettner@gmail.com).
              </p>
            </div>
          </div>
       
</div>
        {/* <Footer /> */}
      </>
    );
  }
}
export default Kollege;
