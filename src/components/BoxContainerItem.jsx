import React from "react";
import { Link } from "gatsby";
import boxContainerStyles from "./box-container.module.css";
import shadowStyles from "../css/shadows.module.css";

export default ({ isHref, name, linksto }) => (
    <React.Fragment>
        {
            (isHref ?
                <a className={`${boxContainerStyles.item} ${shadowStyles.hoveredShadow}`} href={linksto}>
                    {name}
                </a>
                :
                <Link className={`${boxContainerStyles.item} ${shadowStyles.hoveredShadow}`} to={linksto}>
                    {name}
                </Link>
            )
        }
    </React.Fragment>
);
