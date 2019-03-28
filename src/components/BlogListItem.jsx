import React from "react";
import {Link} from "gatsby";

export default ({node}) => (
    <Link to={node.fields.slug}>
        <h2 style={{display: "inline-block"}}>{node.frontmatter.title}{" - "}{node.frontmatter.date}</h2>
        <p>{node.excerpt}</p>
        <div style={{color: "grey"}}>{node.timeToRead}{" minute read"}</div>
    </Link>
);