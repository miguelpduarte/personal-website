import React from "react";
import CVSection from "../CVSection";
import {graphql, StaticQuery} from "gatsby";
import CVExperienceItem from "./CVExperienceItem";

const CVExperience = ({data}) => (
    <CVSection title="Experience">
        {data.allMarkdownRemark.edges.map(({node}) => (
            <React.Fragment key={node.id}>
                <CVExperienceItem node={node}/>
            </React.Fragment>
        ))}
    </CVSection>
);
  
export default props => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            cv_section: {eq: "experience"}
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                where
                                where_link
                                date_start
                                date_end
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={data => <CVExperience data={data} {...props} />}
    />
);
