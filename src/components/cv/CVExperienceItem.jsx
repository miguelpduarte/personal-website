import React from "react";
import cvStyles from "./cv.module.css";

export default ({node}) => (
    <div>
        <h2>{node.frontmatter.title}</h2>
        <h3><a className={cvStyles.sectionSubtitle} href={node.frontmatter.where_link}>{node.frontmatter.where}</a></h3>
        <h4>{node.frontmatter.date_start}{" - "}{node.frontmatter.date_end}</h4>
        <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
    </div>
);
