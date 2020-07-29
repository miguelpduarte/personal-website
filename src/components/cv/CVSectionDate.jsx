import React from "react";
import marginStyles from "../../css/margins.module.css";
import cvStyles from "./cv.module.css";

export default ({ start, end }) => (
    <h4 className={`${marginStyles.topExtraSmall} ${marginStyles.bottomSmall} ${cvStyles.date}`}>{start}{" - "}{end}</h4>
);
