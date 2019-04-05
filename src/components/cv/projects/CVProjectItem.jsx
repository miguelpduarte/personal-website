import React from "react";
import cvStyles from "../cv.module.css";
import marginStyles from "../../../css/margins.module.css";
import CVSectionDate from "../CVSectionDate";
import CVSectionText from "../CVSectionText";

export default ({node}) => (
    <div className={marginStyles.bottomMedium}>
        <h2><a className={cvStyles.sectionSubtitle} href={node.frontmatter.link}>{node.frontmatter.title}</a></h2>
        <CVSectionDate start={node.frontmatter.date_start} end={node.frontmatter.date_end}/>
        <CVSectionText html={node.html}/>
    </div>
);