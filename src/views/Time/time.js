import React, { Component } from "react";
import "./time.scss";
import { Container } from "@material-ui/core";
class Time extends Component {
    render(){
    return(
       <>
           {/* <div className="timeheading">Sprechzeitens</div> */}
            
          
          <Container>
          <div className="btn1">
            
                 <div><button className="button1">Montag</button>
                 <p>08:00–12:00</p>
                 <p>16:00–18:30</p></div> 
               
                <div>  <button className="button2">Dienstag</button>
                <p>08:00–12:00</p>
                <p>15:00–17:00</p></div>
                
                 <div>
                  <button className="button3">Mittwoch</button>
                  <p>08:00–12:00</p></div>
                  
                 <div>  <button className="button4">Donnerstag</button>
                 <p>08:00–12:00</p>
                 <p>16:00–18:30</p></div>
               
              <div>    <button className="button5">Freitag</button>
              <p>08:00–14:00</p></div>
              
         </div>
         </Container>
          </>
    );
    }
}
export default Time;