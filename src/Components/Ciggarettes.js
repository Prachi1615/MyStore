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
                        title={"GOLD FLAKE \nKINGS"}
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"GOLD FLAKE \nKINGS"}
                        price=" 165"
                        content="Pack of 10"> </Product>
                    <Product
                        title={"GOLD FLAKE \nLIGHTS"}
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"GOLD FLAKE \nLIGHTS"}
                        price=" 165"
                        content="Pack of 10"> </Product>
                    <Product
                        title={"CLASSIC \nMILDS"}
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"CLASSIC \nULTRA MILDS"}
                        price=" 330"
                        content="Pack of 20"> </Product>

                    <Product
                        title={"CLASSIC \nICE BURST"}
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"CLASSIC \nLOW SMELL"}
                        price=" 330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"GOLD FLAKE \nSMALL"}
                        price=" 100"
                        content="Pack of 10"> </Product>
                    <Product
                        title="FLAKE PREMIUM"
                        price=" 80"
                        content="Pack of 10"> </Product>
                    <Product
                        title="BERKLEY"
                        price="60"
                        content="Pack of 10"> </Product>
                    <Product
                        title="PLAYER's"
                        price="60"
                        content="Pack of 10"> </Product>

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
                        title={"MARLBORO \nRED"}
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"MARLBORO \nADVANCE"}
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"MARLBORO \nGOLD"}
                        price="330"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"MARLBORO \nDOUBLE SWITCH"}
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
                        title={"DAVIDOFF WHITE \nSLIM"}
                        price="290"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"DAVID OFF GOLD \nSLIM"}
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
                        title={"MOND \nGREEN APPLE"}
                        price="120"
                        content="Pack of 20"> </Product>
                    <Product
                        title={"MOND \nSTRAWBERRY"}
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
                        title="GUDANG GARAM"
                        price="140"
                        content="Pack of 12"> </Product>
                </Grid>
            </div>



        </nav>

    )
}

export default Ciggarettes
