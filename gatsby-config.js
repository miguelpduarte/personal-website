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
                name: "data",
                path: `${__dirname}/src/data`, // eslint-disable-line
            },
        },
        "gatsby-transformer-remark",
    ],
};