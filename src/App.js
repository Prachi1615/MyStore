import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import FAQ from "./Components/FAQ"
import Menu from './Components/Menu'
import Cigs from './Components/Ciggarettes'
import Hookah from './Components/Hookah'
import Food from './Components/FoodNDrinks'

import Particle from 'react-particles-js'

function App() {
  return (

    <div className="App">

      <Particle className="particle"
        params={{
          "particles": {
            "number": {
              "value": 150,
              "density": {
                "enable": true
              },

            },
            "shape": {
              "type": "image",
              "color": "",
              "options": {
                "image":
                {
                  src: "https://i.ibb.co/85Wx921/2.png"

                }
              }
            },

            "size": {
              "value": 200,
              "random": false,
              "anim": {
                "speed": 0.4,
                "size_min": 0.1
              }
            },
            "line_linked": {
              "enable": false,
              "color": "#5A504D",
              "width": 5000,
              "opacity": 0.4
            },
            "move": {
              "random": true,
              "speed": 0.4,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble",
                "speed": "0.2"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse",
                "speed": "0.8"
              }
            },
            "opacity": {
              "value": 7,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "opacity_max": "0.1",
                "sync": false
              }
            },
            "modes": {
              "bubble": {
                "distance": 3,
                "duration": 2,
                "size": 0,
                "opacity": 1
              },
              "repulse": {
                "distance": 100,
                "duration": 2
              }
            }
          }
        }}    >

      </Particle>

      <Router>

        <Switch>

          <Route exact path="/">
            <Header />
            <Home />
            <Menu />

          </Route>

          <Route exact path="/aboutUs" >
            <Header />
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contactUs">
            <Header />
            <ContactUs />
          </Route>
          <Route exact path="/FAQs">

            <Header />
            <FAQ />
          </Route>
          <Route exact path="/cigarettes">
            <Header />
            <Cigs />
          </Route>
          <Route exact path="/hookah">
            <Header />
            <Hookah />
          </Route>
          <Route exact path="/food&drinks">
            <Header />
            <Food />
          </Route>

          {/* <Route path="/contactUs/location"
            component={() => window.location = 'https://goo.gl/maps/wLvNWq6pAht1B2xS7'}
          ></Route> */}




        </Switch>
      </Router>

    </div >


  );
}

export default App;
