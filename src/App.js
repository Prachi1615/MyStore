import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ"
import smoke from './smoke.png'

import Particle from 'react-particles-js'

function App() {
  return (

    <div className="App">

      <Particle className="particle"
        params={{
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true
              },

            },
            "shape": {
              "type": "image",
              "options": {
                "image":
                {
                  src: "https://clipart-best.com/img/smoke/smoke-clip-art-32.png"
                }
              }
            },

            "size": {
              "value": 300,
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
                "mode": "slow",
                "speed": "0.2"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse",
                "speed": "0.3"
              }
            },
            "opacity": {
              "value": 0.1,
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
                "distance": 300,
                "duration": 4
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

          {/* <Route path="/contactUs/location"
            component={() => window.location = 'https://goo.gl/maps/wLvNWq6pAht1B2xS7'}
          ></Route> */}




        </Switch>
      </Router>

    </div>


  );
}

export default App;
