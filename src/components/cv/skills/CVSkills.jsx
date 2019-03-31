import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CVSkillItem from "./CVSkillItem";
import chipStyles from "../../css/chips.module.css";

const CVSkills = ({data}) => (
    <div>
        <h1>Skills</h1>
        <div className={chipStyles.container}>
            {data.allSkillsJson.nodes.map((node, index) => (
                <React.Fragment key={index}>
                    <CVSkillItem node={node}/>
                </React.Fragment>
            ))}
        </div>
    </div>
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