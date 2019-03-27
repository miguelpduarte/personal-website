import React from "react";
import boxContainerStyles from "./box-container.module.css";
import positionStyles from "../css/positions.module.css";
import shadowStyles from "../css/shadows.module.css";

export default (props) => (
    <div className={`${boxContainerStyles.box} ${positionStyles.horizontaleratorinatorSmaller} ${shadowStyles.regular}`}>
        {props.children}
    </div>
);