import React from 'react'
import Product from "./Product"
import './FoodNDrinks.css'
import Grid from "@material-ui/core/Grid"

function FoodNDrinks() {
    return (
        <nav className="food">
            <div className="brand">
                <h1>
                    DRINKS
                </h1>
                <br />

                <Grid className="grid"
                    container direction="row"
                    justify="center">
                    <Product
                        title={'BADAM MILK \nHOMEMADE'}
                        price=" 60"> </Product>
                    <Product
                        title={'LASSI \nHOMEMADE'}
                        price=" 60"> </Product>
                    <Product
                        title={'RED BULL \nENERGY DRINK'}
                        price=" 115"> </Product>
                    <Product
                        title={'RED BULL \nYELLOW EDITION'}
                        price=" 115"> </Product>
                    <Product
                        title={'TENDER COCONUT \nWATER 200ML'}
                        price=" 45"> </Product>
                    <Product
                        title={'7UP CAN'}
                        price=" 25"> </Product>
                    <Product
                        title={'MOUNTAIN DEW \nCAN'}
                        price=" 25"> </Product>
                    <Product
                        title={'COCA-COLA \nCAN'}
                        price=" 40"> </Product>
                    <Product
                        title={'PEPSI CAN'}
                        price=" 25"> </Product>
                    <Product
                        title={'PEPSI ZERO \nCAN'}
                        price=" 25"> </Product>
                    <Product
                        title={'HERSHEY\'S \nSTRAWBERRY MILK'}
                        price=" 35"> </Product>
                    <Product
                        title={'HERSHEY\'S \nCOOKIE \'N\' CREAM \nMILK'}
                        price=" 35"> </Product>
                    <Product
                        title={'BISLERY SODA '}
                        price=" 20"> </Product>
                    <Product
                        title={'HELL \nenergy drink '}
                        price=" 50"> </Product>

                </Grid>
            </div>

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
                        title={"CADBURY DIARY MILK \n SILK FRUIT & NUT "}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY DIARY \n MILK SILK HAZELNUT"}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY DIARY \nMILK SILK BUBBLY"}
                        price=" 175"> </Product>
                    <Product
                        title={"CADBURY DIARY\n MILK SILK OREO"}
                        price=" 175"> </Product>
                    <Product
                        title={"AMUL RAISIN N ALMOND \nMILK CHOCOLATE BAR "}
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
                        title={"POP TART \n(ROSTED CHOCOLATE CHIP)"}
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
                        title={"PRINGLES THE ORIGINAL"}
                        price=" 175"> </Product>
                    <Product
                        title={"PRINGLES \nBBQ"}
                        price=" 175"> </Product>
                    <Product
                        title={"PRINGLES \nCHEESY CHEESE"}
                        price=" 175"> </Product>
                    <Product
                        title={"TOBLERON YELLOW"}
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
                        title={"MAGIC POP \nSTRAWBERRY"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC POP \nGREEN APPLE"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC POP \nCOLA"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC POP \nLEMON"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC POP \nORANGE"}
                        price=" 10"> </Product>
                    <Product
                        title={"MAGIC POP \nGRAPE"}
                        price=" 10"> </Product>
                    <Product
                        title={"SKITTLES \nTROPICAL"}
                        price=" 65"> </Product>
                    <Product
                        title={"SKITTLES \nSOURS"}
                        price=" 65"> </Product>
                    <Product
                        title={"SKITTLES \nWILD BERRY"}
                        price=" 65"> </Product>
                    <Product
                        title={"DIARY MILK \nIMPORTED"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY DIARY MILK \nBLACK FOREST"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY DIARY \nMILK ORIGINAL"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY DIARY MILK \nHAZELNUT"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY DIARY MILK \nFRUIT & NUT"}
                        price=" 350"> </Product>
                    <Product
                        title={"CADBURY DIARY MILK \nROSTED ALMONDS"}
                        price=" 350"> </Product>


                </Grid>
            </div>
        </nav>
    )
}

export default FoodNDrinks
