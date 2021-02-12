import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ"

import Particle from 'react-particles-js'


function App() {
  return (

    <div className="App">
      <Particle className="particle"
        params={{
          particles: {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          },
        }}>

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
