import React from "react";
import {graphql, StaticQuery} from "gatsby";
import chipStyles from "../../css/chips.module.css";
import CVInterestsItem from "./CVInterestsItem";

const CVInterests = ({data}) => (
    <div>
        <h1>Interests</h1>
        <div className={chipStyles.container}>
            {data.allInterestsJson.nodes.map((node, index) => (
                <React.Fragment key={index}>
                    <CVInterestsItem node={node}/>
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default props => (
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
        render={data => <CVInterests data={data} {...props} />}
    />
);