import React from "react";
import CVSection from "../CVSection";
import { graphql, StaticQuery } from "gatsby";
import CVProjectItem from "./CVProjectItem";

const CVProjects = ({ data }) => (
    <CVSection title="Projects">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <React.Fragment key={node.id}>
                <CVProjectItem node={node}/>
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
                            cv_section: {eq: "projects"}
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                link
                                date_start
                                date_end
                            }
                            html
                        }
                    }
                }
            }
        `}
        render={(data) => <CVProjects data={data} {...props} />}
    />
);
