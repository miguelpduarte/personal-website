import React from "react";
import {graphql, StaticQuery} from "gatsby";
import positionStyles from "../../css/positions.module.css";
import borderStyles from "../../css/borders.module.css";
import marginStyles from "../../css/margins.module.css";
import profilePic from "../../data/images/miguel.png";

const CVHeader = ({data}) => {
    const {myInfoJson} = data;
    return (
        <div className={positionStyles.unbalancedTwoColumnContainer}>
            <div className={marginStyles.rightMedium}>
                <h1>{myInfoJson.name}</h1>
                <h2>{myInfoJson.position}</h2>
                <p>{myInfoJson.bio}</p>
            </div>
            <img className={borderStyles.round + " " + borderStyles.thinPrimary} height="250" src={profilePic}/>
        </div>
    );
};

export default props => (
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
        render={data => <CVHeader data={data} {...props} />}
    />
);