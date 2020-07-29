import React from "react";
import { graphql, StaticQuery } from "gatsby";
import chipStyles from "../../../../css/chips.module.css";
import CVInterestsItem from "./CVInterestsItem";
import CVSection from "../../CVSection";

const CVInterests = ({ data }) => (
    <CVSection title="Interests">
        <div className={chipStyles.container}>
            {data.allInterestsJson.nodes.map((node, index) => (
                <React.Fragment key={index}>
                    <CVInterestsItem node={node}/>
                </React.Fragment>
            ))}
        </div>
    </CVSection>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allInterestsJson {
                    nodes {
                        name
                    }
                }
            }
        `}
        render={(data) => <CVInterests data={data} {...props} />}
    />
);
