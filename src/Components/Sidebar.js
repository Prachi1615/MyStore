import React from 'react';
import './Sidebar.css'
import Category from "./Category"
import { Link } from "react-router-dom";
import ham from "hamburgers"

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            style: "menu1",
            menuStatus: "open"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        switch (this.state.menuStatus) {
            case "open":
                this.setState({
                    menuStatus: "close",
                    style: "menu active"
                });
                break;
            case "close":
                this.setState({
                    menuStatus: "open",
                    style: "menu1"
                });
                break;
        }
    }

    render() {
        return (

            <div className="sidebar">
                <div className="nav-icon2" onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <div className={this.state.style}>
                    <ul className="list">
                        <Link to="/clothes">
                            <div className="prod_row">
                                <Category
                                    title="CLOTHES">

                                </Category>
                            </div>
                        </Link>

                        <Link to="/chocolates">
                            <div className="prod_row">
                                <Category
                                    title="CHOCOLATES"
                                >
                                </Category>
                            </div>
                        </Link>
                        <Link to="/electronics">
                            <div className="prod_row">
                                <Category
                                    title="ELECTRONICS">

                                </Category>
                            </div>
                        </Link>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;