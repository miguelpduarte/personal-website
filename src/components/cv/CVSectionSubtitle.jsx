import React from "react";
import marginStyles from "../../css/margins.module.css";
import cvStyles from "./cv.module.css";

export default ({text, link}) => (
    <h3 className={marginStyles.verticalExtraSmall}>
        <a className={cvStyles.sectionSubtitle} href={link}>
            {text}
        </a>
    </h3>
);