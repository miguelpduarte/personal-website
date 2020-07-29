import React from "react";
import Navbar from "./Navbar";

import "../css/global.css";
import positionsStyles from "../css/positions.module.css";
import padddingStyles from "../css/paddings.module.css";

export default (props) => (
    <div className={`${positionsStyles.horizontaleratorinator3000} ${padddingStyles.horizontalSmall}`}>
        <Navbar />
        {props.children}
    </div>
);
