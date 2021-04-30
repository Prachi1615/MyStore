import React from 'react'
import Product from "./Product"
import './Ciggarettes.css'
import Grid from "@material-ui/core/Grid"

function Ciggarettes() {
    return (
        <nav className="ciggarettes">
            <div className="brand">
                <h1>
                    JEANS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"PEOPLE"}
                        price=" 1500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 1500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 1500"> </Product>
                    <Product
                        title={"PEOPLE"}
                        price=" 3500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 3500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 3500"> </Product>
                </Grid>

            </div>
            <div className="brand">
                <h1>
                    SHIRT
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"PEOPLE"}
                        price=" 1500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 1500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 1500"> </Product>
                    <Product
                        title={"PEOPLE"}
                        price=" 3500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 3500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 3500"> </Product>
                </Grid>
            </div>
            <div className="brand">
                <h1>
                    JACKET
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"PEOPLE"}
                        price=" 1500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 1500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 1500"> </Product>
                    <Product
                        title={"PEOPLE"}
                        price=" 3500"> </Product>
                    <Product
                        title={"LEVI's"}
                        price=" 3500"> </Product>
                    <Product
                        title={"BLACKBERRY"}
                        price=" 3500"> </Product>
                </Grid>
            </div>


        </nav>

    )
}

export default Ciggarettes
