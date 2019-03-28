import React from "react";

export default ({node}) => (
    <div>
        <h2><a href={node.frontmatter.link}>{node.frontmatter.title}</a></h2>
        <h4>{node.frontmatter.date_start}{" - "}{node.frontmatter.date_end}</h4>
        <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
    </div>
);