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
        </nav>
    )
}

export default FoodNDrinks
