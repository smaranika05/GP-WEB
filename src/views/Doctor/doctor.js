import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from "./../../assets/img/individual_pic.jpg";
import "./doctor.scss";
const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  paddingLeft: "30%",
  paddingTop:"10%",
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  // position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  //padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const SubTitle = styled.h4({
  transform: "translate3d(0,20px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "300px",
  height: "100vh",
  color: "#FFF",
  // position: "relative",
  width: "max-width",
  //   height: "350px",

  cursor: "pointer",
  //backgroundImage: "url(./../../assets/img/individual_pic.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.7)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

// const CTA = styled.a({
//   position: "absolute",
//   fontfamily: "Lato",
//   fontstyle: "normal",
//   fontsize: "100%",
//   color: "#5ecd73",
//   to:''
//});

class Hover_img extends Component {
  render() {
    return (
      <div className="Hover_img">
        <Background style={{ backgroundImage: `url(${image})` }}>
          <DisplayOver>
            <Hover>
              <div className="doc_scroll_text">
                <SubTitle>
                  <p className="doc_head">Dr. med. Ottmar Dettner</p>
                </SubTitle>
                <Paragraph>
                  <p className="doc_content">
                    Als Allgemeinarzt ist Herr Dr. med. Ottmar Dettner seit mehr
                    als 25 Jahren mit eigener Praxis in Hammelburg
                    niedergelassen.
                  </p>
                </Paragraph>
                <div className="doc_sub">
                  <div className="doc_btn"></div>
                  
                    <a>
                      <Link to="/About">
                        Zum Artzprofil
                      </Link>
                    </a>
                  
                </div>
              </div>
            </Hover>
          </DisplayOver>
        </Background>
      </div>
    );
  }
}

export default Hover_img;
