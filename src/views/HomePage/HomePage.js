import React, { Component } from "react";

import Pteam from "./../../views/praxiteam/pteam";

import Gallery from "./../gallery/Gallery";
import Time from "./../../views/Time/time";
import Root from "./../../views/Root/Root";

import "./Main.scss";

import Footer from "./../../components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="gp">
        <div className="root" id="root">
          <Root />
        </div>
        <div className="prax" id="praxisteam">
          <h1>Das Praxisteam</h1>
          <Pteam />
        </div>

        <div className="time" id="sprechzeiten">
          <h1>Sprechzeiten</h1>
          <Time />
        </div>

        {/* <div className="doct">
          <h1>Dr. med. Ottmar Dettner</h1>
          <Doctor />
        </div> */}
        <div className="gallery">
          <h1>Praxisräumlichkeiten</h1>
          <br></br>
          <Gallery />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
