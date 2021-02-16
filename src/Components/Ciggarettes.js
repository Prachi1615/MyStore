import React from 'react'
import Product from "./Product"
import './Ciggarettes.css'
import Grid from "@material-ui/core/Grid"

function Ciggarettes() {
    return (
        <nav className="ciggarettes">
            <div className="brand">
                <h1>
                    ITC
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="GOLD FLAKE KING"
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="GOLD FLAKE LIGHTS"
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="GOLD FLAKE SMALL"
                        price=" 100"
                        content="Pack of 10"> </Product>
                    <Product
                        title="GOLD FLAKE"
                        price=" 80"
                        content="Pack of 10"> </Product>
                    <Product
                        title="CLASSIC ULTRA MILDS"
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="CLASSIC MILD"
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="CLASSIC LOW SMELL"
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="CLASSIC ICE BURST"
                        price=" 330"
                        content="Pack of 20"> </Product>

                </Grid>
            </div>
            <div className="brand">
                <h1>
                    MARLBORO
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="MARLBORO DOUBLE SWITCH"
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="MARLBORO RED"
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="MARLBORO GOLD"
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title="MARLBORO ADVANCE"
                        price="330"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    DUNHILL
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="DUNHILL BLUE"
                        price="305"
                        content="Pack of 20"> </Product>
                    <Product
                        title="DUNHILL SILVER"
                        price="305"
                        content="Pack of 20"> </Product>
                    <Product
                        title="DUNHILL GREEN"
                        price="305"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    DAVIDOFF
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="DAVIDOFF WHITE"
                        price="305"
                        content="Pack of 20"> </Product>
                    <Product
                        title="DAVIDOFF GOLD "
                        price="305"
                        content="Pack of 20"> </Product>
                    <Product
                        title="DAVIDOFF WHITE SLIM"
                        price="290"
                        content="Pack of 20"> </Product>
                    <Product
                        title="DAVID OFF GOLD SLIM"
                        price="290"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    ESSE
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="ESSE GOLD"
                        price="155"
                        content="Pack of 20"> </Product>
                    <Product
                        title="ESSE LIGHTS"
                        price="145"
                        content="Pack of 20"> </Product>
                    <Product
                        title="ESSE BLACK"
                        price="175"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>

            <div className="brand">
                <h1>
                    MOND
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="MOND GREEN APPLE"
                        price="120"
                        content="Pack of 20"> </Product>
                    <Product
                        title="MOND STRAWBERRY"
                        price="120"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    L&M
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="L&M BLUE"
                        price="210"
                        content="Pack of 20"> </Product>
                    <Product
                        title="L&M RED"
                        price="210"
                        content="Pack of 20"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    OTHER BRANDS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="BERKLEY"
                        price="60"
                        content="Pack of 10"> </Product>
                    <Product
                        title="PLAYER's"
                        price="60"
                        content="Pack of 10"> </Product>
                    <Product
                        title="PARIS"
                        price="140"
                        content="Pack of 20"> </Product>
                    <Product
                        title="WIN"
                        price="140"
                        content="Pack of 20"> </Product>
                    <Product
                        title="BLACK"
                        price="140"
                        content="Pack of 20"> </Product>
                    <Product
                        title="GUDAND GARAM"
                        price="140"
                        content="Pack of 12"> </Product>
                </Grid>
            </div>



        </nav>

    )
}

export default Ciggarettes
