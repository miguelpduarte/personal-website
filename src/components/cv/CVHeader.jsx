import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import positionStyles from "../../css/positions.module.css";
import borderStyles from "../../css/borders.module.css";
import marginStyles from "../../css/margins.module.css";
import textStyles from "../../css/text-styles.module.css";
import profilePic from "../../data/images/miguel.png";

const CVHeader = ({ data }) => {
    const { myInfoJson } = data;
    return (
        <div className={positionStyles.unbalancedTwoColumnContainer}>
            <div className={marginStyles.rightMedium}>
                <h1>{myInfoJson.name}</h1>
                <h2>{myInfoJson.position}</h2>
                <p>{myInfoJson.bio}</p>
                <p>
                    Take a look at my <a className={textStyles.mainAnchor} href="#cv-experience">Experience</a>,&nbsp;
                    <a className={textStyles.mainAnchor} href="#cv-education">Education</a> and&nbsp;
                    <a className={textStyles.mainAnchor} href="#cv-projects">Projects</a>&nbsp;
                    or check out my <Link className={textStyles.mainAnchor} to="/blog">Blog</Link>!
                </p>
            </div>
            <img className={`${borderStyles.round} ${borderStyles.thinPrimary}`} height="250" src={profilePic}/>
        </div>
    );
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                myInfoJson {
                    name
                    position
                    bio
                }
            }
        `}
        render={(data) => <CVHeader data={data} {...props} />}
    />
);
