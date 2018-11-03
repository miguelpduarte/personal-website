import React, { Component } from "react";
import backgroundStyles from "./background.module.css";

export default class Background extends Component {
    render() {
        return (
            <div className={`${backgroundStyles.bgLook} ${backgroundStyles.bgPos}`}>
            </div>
        );
    }
}
