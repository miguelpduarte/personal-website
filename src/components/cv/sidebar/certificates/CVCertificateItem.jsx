import React from "react";
import colorStyles from "../../../../css/colors.module.css";

export default ({node}) => (
    <div>
        <h4>{node.name}</h4>
        <h5 className={colorStyles.textLight}>{node.subtitle}</h5>
    </div>
);