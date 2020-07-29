module.exports = {
    plugins: [
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
                        resolve: "gatsby-remark-prismjs", options: {},
                    },
                ],
            },
        },
        "gatsby-transformer-json",
    ],

    siteMetadata: {
        title: "Miguel's Place!",
        description: "My personal website.",
        siteUrl: "https://miguelpduarte.me",
    },
};
