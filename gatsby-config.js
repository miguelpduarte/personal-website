// eslint-disable-next-line
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
        "gatsby-transformer-remark",
    ],

    siteMetadata: {
        title: "Miguel's Place!",
        description: "My personal website.",
    },
};