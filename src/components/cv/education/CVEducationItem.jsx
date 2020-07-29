import React from "react";
import marginStyles from "../../../css/margins.module.css";
import CVSectionTitle from "../CVSectionTitle";
import CVSectionSubtitle from "../CVSectionSubtitle";
import CVSectionDate from "../CVSectionDate";
import CVSectionText from "../CVSectionText";

export default ({node}) => (
    <div className={marginStyles.bottomMedium}>
        <CVSectionTitle text={node.frontmatter.title}/>
        <CVSectionSubtitle text={node.frontmatter.where} link={node.frontmatter.where_link}/>
        <CVSectionDate start={node.frontmatter.date_start} end={node.frontmatter.date_end}/>        
        <CVSectionText html={node.html}/>
    </div>
);
