import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from "./../../assets/img/Room_1.png";
import slide2 from "./../../assets/img/Room_2.png";
import slide3 from "./../../assets/img/Room_3.png";
import slide4 from "./../../assets/img/slide4.jpg";
import slide5 from "./../../assets/img/slide5.jpg";
import slide6 from "./../../assets/img/slide6.jpg";
import "./Gallery.scss";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter",
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4];
const slidePhone = [slide4, slide5, slide6];
//===========================================
// APP COMPONENT
//===========================================
class Gallery extends Component {
  render() {
    return (
      <div className="slide_cover">
        <div className="desktop_view">
          <div className={s.container}>
            <div className={s.main}>
              <Slideshow slides={slides} />
            </div>
          </div>
        </div>
        <div className="phone_view">
          <div className={s.container}>
            <div className={s.main}>
              <Slideshow slides={slidePhone} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
