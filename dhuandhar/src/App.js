import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Category from "./Category"
import Home from "./Home";
import Login from "./Login"
import ProductCategory from './ProductCategory';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          {/* <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
            <br />
            <br />
            {/* <Category >
              <Route path="/ciggarettes">
                <Header />
                <ProductCategory />
                <h1>Cig categories</h1>
              </Route>
              <Route path="/hookah">
                <h1>Hookah</h1>
              </Route>
            </Category> */}
          </Route>


        </Switch>
      </div>
    </Router >


  );
}

export default App;
