import React from "react";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import CVExperience from "../components/cv/CVExperience";
import positionsStyles from "../css/positions.module.css";
import CVSidebar from "../components/cv/CVSidebar";
import CVProjects from "../components/cv/CVProjects";
import CVEducation from "../components/cv/CVEducation";

export default () => (
    <Layout>
        <h3>WIP - Work in Progress</h3>

        <div className={positionsStyles.unbalancedTwoColumnContainer}>
            <div style={{marginRight: "2em"}}>
                <CVExperience/>
                <CVEducation/>
                <CVProjects/>
            </div>

            <CVSidebar/>
        </div>
    </Layout>
);

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    cv_section: {eq: "experience"}
                }
            }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        where
                        date_start
                        date_end
                    }
                    html
                }
            }
        }
    }
`;
