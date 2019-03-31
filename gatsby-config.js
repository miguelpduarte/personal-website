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
        "gatsby-transformer-json",
    ],

    siteMetadata: {
        title: "Miguel's Place!",
        description: "My personal website.",
        siteUrl: "https://miguelpduarte.me",
    },
};