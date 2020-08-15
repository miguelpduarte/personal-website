module.exports = {
    plugins: [
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.js",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`, // eslint-disable-line
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 780,
                            backgroundColor: "transparent",
                        },
                    },
                    {
                        resolve: "gatsby-remark-prismjs", options: {},
                    },
                ],
            },
        },
        "gatsby-transformer-json",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-feed",
            options: {
                feeds: [
                    {
                        query: `
                        {
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
                                        excerpt
                                        html
                                        fields { slug }
                                        frontmatter {
                                            title
                                            date
                                            tags
                                        }
                                    }
                                }
                            }
                        }
                        `,
                        title: "Miguel Duarte's Blog",
                        output: "/rss.xml",
                    },
                ],
            },
        },
    ],

    siteMetadata: {
        title: "Miguel Duarte",
        titleTemplate: "%s ~ Miguel Duarte",
        description: "miguelpduarte's personal website and blog",
        siteUrl: "https://miguelpduarte.me",
        image: "/images/miguel.png",
        twitterUsername: "@miguelpduarte",
    },
};
