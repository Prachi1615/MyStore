import React from 'react'
import Product from "./Product"
import './MedwakhAndDokha.css'
import Grid from "@material-ui/core/Grid"

function MedwakhAndDokha() {
    return (
        <nav className="medwakh">
            <div className="brand">
                <h1>
                    MEDWAKH
            </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"WOODEN MEDWAKH \nSMALL "}
                        price=" 200"
                        content="per piece"> </Product>
                    <Product
                        title="METAL MEDWAKH "
                        price=" 350"
                        content="per piece"> </Product>
                    <Product
                        title="METAL EAGEL MEDWAKH"
                        price=" 430"
                        content="per piece"> </Product>
                    <Product
                        title="PRINTED MEDWAKH"
                        price=" 600"
                        content="per piece"> </Product>
                    <Product
                        title="CURVED SMOKING PIPE"
                        price=" 489"
                        content="per piece"> </Product>


                </Grid>
            </div>
            <div className="brand">
                <h1>
                    DOKHA
            </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title="DOKHA PLATINUM"
                        price=" 399"
                        content="7 gram bottle"> </Product>
                    <Product
                        title="DOKHA INTENSE"
                        price=" 499"
                        content="7 gram bottle"> </Product>
                    <Product
                        title="DOKHA ORIGINAL "
                        price=" 249"
                        content="7 gram bottle"> </Product>
                    <Product
                        title="DOKHA GOLD"
                        price=" 449"
                        content="7 gram bottle"> </Product>


                </Grid>
            </div>
        </nav>
    )
}

export default MedwakhAndDokha
