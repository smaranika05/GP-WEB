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
//import Pteam from "./views/praxiteam/pteam";
//import Doctor from "./views/Doctor/doctor";
import Time from "./views/Time/time";
import Gallery from "./views/gallery/Gallery";
import {Helmet} from "react-helmet";
import Root from "./views/Root/Root";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Header from "./components/header/header";
import Kollege from "./views/Kollege/Kollege";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
       
            <Helmet>
                <meta charSet="utf-8" />
                <title>Praxis Dr. Dettner</title>
                <link rel="canonical" href="https://www.drdettner.de"></link>
                <link rel="canonical" href="https://www.drdettner.de/leistungsspektrum" />
                <link rel="canonical" href="https://www.drdettner.de/kontakt" />
                <link rel="canonical" href="https://www.drdettner.de/kollegegesucht" />
                <link rel="canonical" href="https://www.drdettner.de/arztprofil" />
                <link rel="canonical" href="https://www.drdettner.de/datenschutzerklaerung" />
                <link rel="canonical" href="https://www.drdettner.de/impressum" />
                

            </Helmet>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/praxisteam" component={Team} />
          <Route exact path="/arztprofil" component={About} />
          <Route exact path="/leistungsspektrum" component={Service} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/datenschutzerklaerung" component={PP} />
          <Route exact path="/impressum" component={Imp} />
          <Route exact path="/root" component={Root} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/kollegegesucht" component={Kollege} />
          <Route path="#time" component={Time} />
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
