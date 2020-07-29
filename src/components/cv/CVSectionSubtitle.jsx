import React from "react";
import marginStyles from "../../css/margins.module.css";
import cvStyles from "./cv.module.css";
import { FiExternalLink } from "react-icons/fi";

export default ({ text, link }) => (
    <h3 className={marginStyles.verticalExtraSmall}>
        <a className={cvStyles.sectionSubtitle} href={link}>
            {text}
            <FiExternalLink style={{ verticalAlign: "text-bottom" }} className={marginStyles.leftMiniscule}/>
        </a>
    </h3>
);
