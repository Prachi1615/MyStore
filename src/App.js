import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import SignIn from "./Components/SignIn"
import FAQ from "./Components/FAQ"
import Menu from './Components/Menu'
import Cigs from './Components/Ciggarettes'
import Hookah from './Components/Hookah'
import Food from './Components/FoodNDrinks'
import Lighter from './Components/Lighters'
import Medwakh from './Components/MedwakhAndDokha'
import Particle from './Components/Particless'
import Sidebar from './Components/Sidebar'
import Slideshow from './Components/Slideshow'


function App() {
  return (

    <div className="App">
      <Particle></Particle>

      <Router>

        <Switch>

          <Route exact path="/">
            <Header />
            <Sidebar className="bar" />
            <Menu />
            <Home />
            <Slideshow />


          </Route>

          <Route exact path="/aboutUs" >
            <Header />
            <Sidebar className="bar" />
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contactUs">
            <Header />
            <Sidebar className="bar" />
            <ContactUs />
          </Route>
          <Route exact path="/FAQs">

            <Header />
            <Sidebar className="bar" />
            <FAQ />
          </Route>
          <Route exact path="/SignIn">

            <Header />
            <Sidebar className="bar" />
            <SignIn />
          </Route>
          <Route exact path="/cigarettes">
            <Header />
            <Sidebar className="bar" />
            <Cigs />
          </Route>
          <Route exact path="/hookah">
            <Header />
            <Sidebar className="bar" />
            <Hookah />
          </Route>
          <Route exact path="/food&drinks">
            <Header />
            <Sidebar className="bar" />
            <Food />
          </Route>
          <Route exact path="/lighter">
            <Header />
            <Sidebar className="bar" />
            <Lighter />
          </Route>
          <Route exact path="/medwakh">
            <Header />
            <Sidebar className="bar" />
            <Medwakh />
          </Route>

          {/* <Route path="/contactUs/location"
            component={() => window.location = 'https://goo.gl/maps/wLvNWq6pAht1B2xS7'}
          ></Route> */}




        </Switch>
      </Router>

      <footer className="footer">
        All rights reserved.
      </footer>

    </div >


  );
}

export default App;
