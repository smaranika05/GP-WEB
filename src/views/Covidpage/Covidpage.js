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
              
              <p>
              Wir versuchen im Rahmen unserer Belastbarkeitsgrenze möglichst viel zu impfen. 
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
