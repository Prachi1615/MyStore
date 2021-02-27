import React from 'react'
import Product from "./Product"
import './Lighters.css'
import Grid from "@material-ui/core/Grid"

function Lighters() {
    return (
        <nav className="lighters">
            <div className="brand">
                <h1>
                    LIGHTERS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"PLASTIC \nCIGARETTE LIGHTER"}
                        price=" 9"
                        content="per piece"> </Product>
                    <Product
                        title={"FANCY \nCIGARETTE LIGHTER"}
                        price=" 25"
                        content="per piece"> </Product>
                    <Product
                        title={"FANCY METAL \nCIGARETTE LIGHTERS"}
                        price=" 50"
                        content="per piece"> </Product>
                    <Product
                        title="APPLE LIGHTER"
                        price=" 50"
                        content="per piece"> </Product>


                </Grid>
            </div>
        </nav>
    )
}

export default Lighters
