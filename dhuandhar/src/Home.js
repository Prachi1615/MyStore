import React from 'react';
import './Home.css';
import Product from './Product';
import logo from "./dhuandhar.png";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src={logo}
                alt=""></img>

        </div>
    )
}

export default Home
