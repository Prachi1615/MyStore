import React from 'react'
import Product from "./Product"
import './FoodNDrinks.css'
import Grid from "@material-ui/core/Grid"

function FoodNDrinks() {
    return (
        <nav className="food">
            <div className="brand">
                <h1>
                    CHOCOLATES
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={'HERSHEY\'S MILK \nCHOCOLATE KISSES'}
                        price=" 140"> </Product>
                    <Product
                        title={"HERSHEY'S \n ALMOND KISSES"}
                        price=" 140"> </Product>
                    <Product
                        title={"HERSHEY'S COOKIE \n'N' CREAM KISSES"}
                        price=" 50"> </Product>
                    <Product
                        title={"HERSHEY'S ALMOND \n CHOCOLATE BAR"}
                        price=" 140"> </Product>
                    <Product
                        title={"HERSHEY'S CREAMY \n MILK CHOCOLATE BAR"}
                        price=" 140"> </Product>
                    <Product
                        title={"HERSHEY'S COOKIE 'N' \n CREAM CHOCOLATE BAR"}
                        price=" 130"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \n SILK FRUIT & NUT "}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nSILK HAZELNUT"}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nSILK BUBBLY"}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nSILK OREO"}
                        price=" 175"> </Product>
                    <Product
                        title={"AMUL RAISIN 'N' ALMOND \nMILK CHOCOLATE BAR "}
                        price=" 200"> </Product>
                    <Product
                        title={"AMUL HAZELNUT \n CHOCOLATE BAR"}
                        price=" 200"> </Product>

                </Grid>
            </div>
            <div className="brand">
                <h1>
                    WAFERS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={"DUKES CHOCO \nROLLS    SMALL"}
                        price=" 150"> </Product>
                    <Product
                        title={"DUKES STRAWBERRY\n ROLLS SMALL"}
                        price=" 150"> </Product>
                    <Product
                        title={"DUKES CHOCO \nROLLS (BIG)"}
                        price=" 250"> </Product>
                    <Product
                        title={"DUKES STRAWBERRY \nROLLS (BIG)"}
                        price=" 250"> </Product>
                    <Product
                        title={"DUKES WAFFY \nCHEESE"}
                        price=" 45"> </Product>
                    <Product
                        title={"DUKES WAFFY \nPINEAPPLE"}
                        price=" 45"> </Product>
                    <Product
                        title={"DUKES WAFFY \nSTRAWBERRY"}
                        price=" 45"> </Product>
                    <Product
                        title={"DUKES WAFFY \nCHOCOLATE"}
                        price=" 45"> </Product>
                    <Product
                        title={"DUKES WAFFY \nORANGE"}
                        price=" 45"> </Product>


                </Grid>
            </div>

            <div className="brand">
                <h1>
                    IMPORTED CHOCOLATES AND SNACKS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={" LINDT SUAVE \n50% cocoa"}
                        price=" 395"> </Product>
                    <Product
                        title={"LINDT LIMON"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nCOCONUT INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nORANGE INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT DARK \n85% cocoa"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nPOIRE INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nCHERRY INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nSTRAWBERRY INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nCHILLI DARK"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \n90% COCOA"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nEXTRA CREMOSO"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nCARAMEL"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \n70% COCOA"}
                        price=" 395"> </Product>
                    <Product
                        title={" LINDT \nAPRICOT INTENSE"}
                        price=" 395"> </Product>
                    <Product
                        title={" POP TART \n(ROASTED CHOCOLATE CHIP)"}
                        price=" 500"
                        content="8 piece per box"> </Product>
                    <Product
                        title={"MARSHMALLOW"}
                        price=" 80"
                        content="pack of 80 pieces"> </Product>
                    <Product
                        title={"PRINGLES \nSALT AND VINEGAR"}
                        price=" 175"> </Product>
                    <Product
                        title={"PRINGLES \nTHE ORIGINAL"}
                        price=" 175"> </Product>
                    <Product
                        title={"PRINGLES \nBBQ"}
                        price=" 175"> </Product>
                    <Product
                        title={"PRINGLES \nCHEESY CHEESE"}
                        price=" 175"> </Product>
                    <Product
                        title={"TOBLERONE \nMILK CHOCOLATE"}
                        price=" 130"> </Product>
                    <Product
                        title={"BOUNTY"}
                        price=" 50"> </Product>
                    <Product
                        title={"FERRERO ROCHER \nT3"}
                        price=" 105"> </Product>
                    <Product
                        title={"FERRERO ROCHER \nT16 "}
                        price=" 560"> </Product>
                    <Product
                        title={"RAFAELLO T3"}
                        price=" 110"> </Product>
                    <Product
                        title={"MAGIC  POPS \nSTRAWBERRY"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC  POPS \nGREEN APPLE"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC  POPS \nCOLA"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC  POPS \nLEMON"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC  POPS \nORANGE"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC  POPS \nGRAPE"}
                        price=" 10"> </Product>
                    <Product
                        title={"SKITTLES \nTROPICAL"}
                        price=" 65"> </Product>
                    <Product
                        title={"SKITTLES \nCRAZY SOURS"}
                        price=" 65"> </Product>
                    <Product
                        title={"SKITTLES \nWILD BERRY"}
                        price=" 65"> </Product>
                    <Product
                        title={" CADBURY \nDARK MILK "}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nBLACK FOREST"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nORIGINAL"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nHAZELNUT"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \nFRUIT & NUT"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY  DAIRY MILK \n ROASTED ALMONDS"}
                        price=" 350"> </Product>
                    <Product
                        title={"KINDER BUENO"}
                        price=" 110"> </Product>
                    <Product
                        title={"KITKAT IMPORTED"}
                        price=" 50"> </Product>
                    <Product
                        title={"NUTELLA B-READY"}
                        price=" 80"> </Product>
                    <Product
                        title={"M&M's \nPEANUT COATED\nMILK CHOCOLATE TRUFFLES"}
                        price=" 80"> </Product>
                    <Product
                        title={"M&M's \nMILK CHOCOLATE CANDIES"}
                        price=" 80"> </Product>
                    <Product
                        title={"FOX'S BERRIES "}
                        price=" 120"
                        content="per tin"> </Product>
                    <Product
                        title={"FOX'S FRUITS"}
                        price=" 120"
                        content="per tin"> </Product>
                    <Product
                        title={"MINI OREO \nMOCHA "}
                        price=" 90"
                        content="per box"> </Product>
                    <Product
                        title={"MINI OREO \nCHOCOLATE"}
                        price=" 90"
                        content="per box"> </Product>
                    <Product
                        title={"MINI OREO \nSTRAWBERRY"}
                        price=" 90"
                        content="per box"> </Product>
                    <Product
                        title={"GERY SUGAR \nCHEESE CRACKERS"}
                        price=" 60"
                        content="per box"> </Product>

                </Grid>
            </div>

        </nav>
    )
}

export default FoodNDrinks
