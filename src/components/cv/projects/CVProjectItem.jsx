import React from "react";
import cvStyles from "../cv.module.css";
import marginStyles from "../../../css/margins.module.css";

export default ({node}) => (
    <div>
        <h2><a className={cvStyles.sectionSubtitle} href={node.frontmatter.link}>{node.frontmatter.title}</a></h2>
        <h4>{node.frontmatter.date_start}{" - "}{node.frontmatter.date_end}</h4>
        <div className={marginStyles.leftSmall} dangerouslySetInnerHTML={{ __html: node.html }}></div>
    </div>
);