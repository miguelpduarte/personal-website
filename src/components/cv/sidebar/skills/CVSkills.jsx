import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CVSkillItem from "./CVSkillItem";
import chipStyles from "../../../../css/chips.module.css";
import CVSection from "../../CVSection";

const CVSkills = ({data}) => (
    <CVSection title="Skills">
        <div className={chipStyles.container}>
            {data.allSkillsJson.nodes.map((node, index) => (
                <React.Fragment key={index}>
                    <CVSkillItem node={node}/>
                </React.Fragment>
            ))}
        </div>
    </CVSection>
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allSkillsJson {
                    nodes {
                        name
                    }
                }
            }
        `}
        render={data => <CVSkills data={data} {...props} />}
    />
);