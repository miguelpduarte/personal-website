import React from "react";
import cvStyles from "./cv.module.css";

export default ({title, children}) => (
    <React.Fragment>
        <h1 className={cvStyles.section}>{title}</h1>
        {children}
    </React.Fragment>
);
