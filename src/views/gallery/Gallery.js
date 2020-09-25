import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from "./../../assets/img/Room_1.png";
import slide2 from "./../../assets/img/Room_2.png";
import slide3 from "./../../assets/img/Room_3.png";
import "./Gallery.scss";


//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3];

//===========================================
// APP COMPONENT
//===========================================
class Gallery extends Component {
    render() {
        return (
            <div className={s.container}>
                {/* <div className={s.header}>Automatic Slideshow Carousel</div> */}
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
                {/* <div className={s.footer}>Built in React - by Ashwanth A R</div> */}
            </div>
        );
    }
}

export default Gallery;