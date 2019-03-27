const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" });
        console.log("aa\n" + slug + "\nbb\n");
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
    {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    blogpost: {eq: true}
                }
            }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }`
    ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/blog_post.jsx"),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            });
        });
    });
};