import React from "react";
import textStyles from "../../../../css/text-styles.module.css";

export default ({ node }) => (
    <div>
        <h4>{node.name}</h4>
        <h5 className={textStyles.light}>{node.subtitle}</h5>
    </div>
);
