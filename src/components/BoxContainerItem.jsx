import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

import boxContainerStyles from "./box-container.module.css";
import shadowStyles from "../css/shadows.module.css";
import textStyles from "../css/text-styles.module.css";

export default ({ isHref, name, linksto }) => (
    <React.Fragment>
        {
            (isHref ?
                <a className={cx(boxContainerStyles.item, shadowStyles.hoveredShadow, textStyles.primaryDark)} href={linksto}>
                    {name}
                </a>
                :
                <Link className={cx(boxContainerStyles.item, shadowStyles.hoveredShadow, textStyles.primaryDark)} to={linksto}>
                    {name}
                </Link>
            )
        }
    </React.Fragment>
);
