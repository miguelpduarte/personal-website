import React from "react";
import CVSection from "../CVSection";
import { graphql, StaticQuery } from "gatsby";
import CVEducationItem from "./CVEducationItem";

const CVEducation = ({ data }) => (
    <CVSection id="cv-education" title="Education">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <React.Fragment key={node.id}>
                <CVEducationItem node={node}/>
            </React.Fragment>
        ))}
    </CVSection>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___order_index], order: DESC },
                    filter: {
                        frontmatter: {
                            cv_section: {eq: "education"}
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
        render={(data) => <CVEducation data={data} {...props} />}
    />
);
