import React from "react";
import colorStyles from "../../../../css/colors.module.css";

export default ({node}) => (
    <div>{node.name}{": "}<span className={colorStyles.textPrimary}>{node.level}</span></div>
);