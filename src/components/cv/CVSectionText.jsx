import React from "react";
import marginStyles from "../../css/margins.module.css";

export default ({html}) => {
    return (
        <div className={marginStyles.leftSmall} dangerouslySetInnerHTML={{ __html: html }}></div>
    );
};