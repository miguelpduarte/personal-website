import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import BlogListItem from "../components/BlogListItem";

export default ({data}) => (
    <Layout>
        <h1>My Blog Posts ({data.allMarkdownRemark.totalCount}):</h1>
        <ul>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <li key={node.id}>
                    <BlogListItem node={node}/>
                </li>
            ))}
        </ul>
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
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                }
            }
        }
    }
`;