import React from "react";
import cvStyles from "./cv.module.css";

export default ({title, children}) => (
    <div>
        <h1 className={cvStyles.section}>{title}</h1>
        {children}
    </div>
);
