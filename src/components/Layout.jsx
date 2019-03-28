import React from "react";
import Navbar from "./Navbar";
import positionsStyles from "../css/positions.module.css";

export default (props) => (
    <div className={positionsStyles.horizontaleratorinator3000}>
        <Navbar />
        {props.children}
    </div>
);