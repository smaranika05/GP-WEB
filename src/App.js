import React, { Component } from "react";

// import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./views/HomePage/HomePage";
import Team from "./views/Teams/team";
import Service from "./views/Service/service";
import Contact from "./views/address/Address";
import About from "./views/About/about";
import PP from "./views/PrivacyPolicy/pp";
import Imp from "./views/Impressum/impressum";
import Pteam from "./views/praxiteam/pteam";
import Doctor from "./views/Doctor/doctor";
import Time from "./views/Time/time";
import Gallery from "./views/gallery/Gallery";

import Root from "./views/Root/Root";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/About" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/Address" component={Contact} />
          <Route exact path="/privacy" component={PP} />
          <Route exact path="/Imp" component={Imp} />
          <Route exact path="/Root" component={Root} />
          <Route exact path="/Gallery" component={Gallery} />
        </Router>
      </div>
    );
  }
}

export default App;
