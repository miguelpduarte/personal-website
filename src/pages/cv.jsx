import React from "react";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import CVExperience from "../components/CVExperience";

export default () => (
    <Layout>
        <h3>WIP - Work in Progress</h3>
        <aside style={{float: "right"}}>
            <h1>Contacts (noheader)</h1>
            <h1>Download CV</h1>
            <h1>Languages</h1>
            <h1>Certificates</h1>
            <h1>Interests</h1>
        </aside>

        <CVExperience/>   

        <h1>Education</h1>
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit Amet</li>
        </ul>
        <h1>Projects</h1>
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit Amet</li>
        </ul>
        <h1>Extra-Curricular Activities</h1>
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit Amet</li>
        </ul>
        <h1>Skills</h1>
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit Amet</li>
        </ul>
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
