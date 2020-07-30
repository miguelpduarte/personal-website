import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogListItem from "../components/BlogListItem";
import cvStyles from "../components/cv/cv.module.css";
import Seo from "../components/Seo";

export default ({ data }) => (
    <Layout>
        <Seo title="Blog" />
        <h1 className={cvStyles.section}>My Blog:</h1>
        <p>
            This is a place where I jot down some thoughts I&apos;ve been having,
            some things I have been working on or just generally some rambling nonsense.
            <br/>
            Occasionally there might be some writeups here too, so stay tuned for that!
        </p>
        <p>This blog is also available as an RSS feed to consume via <a href="https://theoldreader.com">TheOldReader</a> or similar :)</p>
        <h1 className={cvStyles.section}>Blog Posts:</h1>
        <ol style={{ padding: 0, margin: 0 }}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <li style={{ listStyleType: "none", padding: 0, margin: 0 }} key={node.id}>
                    <BlogListItem node={node}/>
                </li>
            ))}
        </ol>
    </Layout>
);

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: {
                frontmatter: {
                    blogpost: {eq: true}
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        tags
                    }
                    fields {
                        slug
                    }
                    timeToRead
                }
            }
        }
    }
`;
