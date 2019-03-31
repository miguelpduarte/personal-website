import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CVLanguageItem from "./CVLanguageItem";
import CVSection from "../../CVSection";

const CVLanguages = ({data}) => (
    <CVSection title="Languages">
        {data.allLanguagesJson.nodes.map((node, index) => (
            <CVLanguageItem key={index} node={node}/>
        ))}
    </CVSection>
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allLanguagesJson {
                  nodes {
                    name
                    level
                  }
                }
            }
        `}
        render={data => <CVLanguages data={data} {...props} />}
    />
);