import React from "react";
import cvStyles from "../cv.module.css";
import marginStyles from "../../../css/margins.module.css";
import CVSectionDate from "../CVSectionDate";
import CVSectionText from "../CVSectionText";
import { FiExternalLink } from "react-icons/fi";

export default ({ node }) => (
    <div className={marginStyles.bottomMedium}>
        <h2>
            <a className={cvStyles.sectionSubtitle} href={node.frontmatter.link}>
                {node.frontmatter.title}
                <FiExternalLink style={{ verticalAlign: "text-bottom" }} className={marginStyles.leftMiniscule}/>
            </a>
        </h2>
        <CVSectionDate start={node.frontmatter.date_start} end={node.frontmatter.date_end}/>
        <CVSectionText html={node.html}/>
    </div>
);
