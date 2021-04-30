import React from 'react'
import Product from "./Product"
import './Lighters.css'
import Grid from "@material-ui/core/Grid"

function Lighters() {
    return (
        <nav className="lighters">
            <div className="brand">
                <h1>
                    ELECTRONICS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"WHIRLPOOL SEMI AUTOMATIC MACHINE"}
                        price=" 9000"
                        content="per piece"> </Product>
                    <Product
                        title={"WHIRLPOOL FULLY AUTOMATIC MACHINE"}
                        price=" 11000"
                        content="per piece"> </Product>
                    <Product
                        title={"ONEPLUS 8T"}
                        price=" 38999"
                        content="per piece"> </Product>
                    <Product
                        title="ONEPLUS 9R"
                        price=" 39999"
                        content="per piece"> </Product>


                </Grid>
            </div>
        </nav>
    )
}

export default Lighters
