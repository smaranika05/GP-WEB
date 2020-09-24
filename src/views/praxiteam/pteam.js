import React, { Component } from "react";
import ScrollItem from "./../opacity/index";
import "./pteam.scss";
import Team from "./../Teams/team";
import Teamimg from "./../../assets/img/Doc_team.png";


import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Pteam extends Component {
    render(){
    return(
        <>


<div className="praxisteam">
  
            <ScrollItem>
              <div className="team_scroll_text">
                <div className="tm_head">Unser Praxisteam</div>
                <div className="tm_content">
                  Wir haben die Allgemeinarztpraxis Dr. med. Dettner im Jahre
                  1993 gegründet. Bis heute liegt es uns am Herzen, dass unsere
                  PatientINNEN optimal versorgt werden. Uns ist es wichtig, dass
                  Sie sich bei uns gut aufgehoben fühlen.
                </div>
                
                <div className="tm_sub">
                <div className="team_btn"></div>
                  <a>
                     
                    <Link to="/team">Mehr übers Praxisteam</Link>
                    
                    
                  </a>
                </div>
                
              </div>
            </ScrollItem>
           
          </div>
          
</>
    );
}
}
export default Pteam;