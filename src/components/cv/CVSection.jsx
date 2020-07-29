import React from "react";
import cvStyles from "./cv.module.css";
import marginStyles from "../../css/margins.module.css";

export default ({ id, title, children }) => (
    <div id={id} className={marginStyles.bottomMedium}>
        <h1 className={cvStyles.section}>{title}</h1>
        {children}
    </div>
);
