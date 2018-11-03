import React, { Component } from "react";
import Navbar from "./Navbar";
import positionsStyles from "../css/positions.module.css";

class Layout extends Component {
    render() {
        return (
            <div className={positionsStyles.horizontaleratorinator3000}>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;