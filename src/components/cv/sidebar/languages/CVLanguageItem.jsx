import React from "react";
import textStyles from "../../../../css/text-styles.module.css";

export default ({ node }) => (
    <div>{node.name}{": "}<span className={textStyles.primary}>{node.level}</span></div>
);
