import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import colors from "../css/colors.module.css";
import cvStyles from "../components/cv/cv.module.css";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1 className={cvStyles.section} style={{ marginBottom: 0 }}>{post.frontmatter.title}</h1>
                <div className="post-details" style={{ marginBottom: "1.45rem" }}>
                    <span>{post.frontmatter.fullDate}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{`${post.timeToRead} minute read`}</span>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <>
                        <br/>
                        <span
                            role="tags"
                            style={{ fontFamily: "monospaced", fontSize: "75%" }}
                            className={colors.textLight}
                        >[{post.frontmatter.tags.join(", ")}]
                        </span>
                    </>)}
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                fullDate: date(formatString: "DD MMMM, YYYY")
                tags
            }
            timeToRead
        }
    }
`;
