import React from 'react';
import './Home.css';
import logo from "./Media/dhuandhar.png"

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
