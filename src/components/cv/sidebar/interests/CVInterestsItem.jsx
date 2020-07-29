import React from "react";
import chipStyles from "../../../../css/chips.module.css";

export default ({ node }) => (
    <div className={chipStyles.chipInverted}>{node.name}</div>
);
