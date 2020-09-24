import React, { Component } from "react";
import ScrollItem from "./../opacity/index";
import "./doctor.scss";
import Team from "./../About/about";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./../About/about";
class Doctor extends Component {
    render(){
    return(
        <>


<div className="doc">
            <ScrollItem>
              <div className="doc_scroll_text">
                <div className="doc_head">Dr. med. Ottmar Dettner</div>
                <div className="doc_content">
                Als Allgemeinarzt ist Herr Dr. med. Ottmar Dettner seit mehr
                  als 25 Jahren mit eigener Praxis in Hammelburg niedergelassen.
                </div>
                
                <div className="doc_sub">
                <div className="doc_btn"></div>
                  <a>
                     
                    <Link to="/About">Mehr zu Person und Nachfolgersuche</Link>
                    
                  </a>
                </div>
                
              </div>
            </ScrollItem>
          </div>
</>
    );
}
}
export default Doctor;