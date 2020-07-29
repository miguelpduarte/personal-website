import React from "react";
import { Link } from "gatsby";

import textStyles from "../css/text-styles.module.css";

export default ({ node }) => (
    <>
        <time>{node.frontmatter.date}&nbsp;</time>
        <Link className={textStyles.mainAnchor} style={{ textDecoration: "underline" }} to={node.fields.slug}>
            <span>{node.frontmatter.title}</span>
        </Link>
        <span className={textStyles.light}>&nbsp;({node.timeToRead}{" minute read"})</span>
        {/* TODO: Add optional chaining. Must be some gatsby upgrade or babel something, but it's too useful to pass on... */}
        {node.frontmatter.tags && (node.frontmatter.tags.length > 0) &&
            <span>&nbsp;[{node.frontmatter.tags.join(", ")}]</span>
        }
    </>
);
