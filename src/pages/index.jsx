import React from "react";
import { graphql } from "gatsby";
import positionStyles from "../css/positions.module.css";
import borderStyles from "../css/borders.module.css";
import BoxContainer from "../components/BoxContainer";
import BoxContainerList from "../components/BoxContainerList";
import Background from "../components/Background";
import profilePic from "../data/images/miguel.png";

export default ({data}) => (
    <div className={`${positionStyles.stretchinerinoVertical} ${positionStyles.verticalizerinator9001}`}>
        <Background />
        <BoxContainer>
            <img className={borderStyles.round} width="175" src={profilePic}/>
            <h1>Miguel Duarte</h1>
            <h2>Informatics and Computer Engineering Student @ FEUP</h2>
            <BoxContainerList items={[
                {name: "GitHub", isHref: true, linksto: data.myInfoJson.github},
                {name: "LinkedIn", isHref: true, linksto: data.myInfoJson.linkedin},
                {name: "CV PDF", isHref: true, linksto: data.myInfoJson.cv_pdf_url},
                {name: "Online CV", linksto: "cv"},
                {name: "Blog", linksto: "blog"},
                {name: "JS Games", isHref: true, linksto: "https://js-games.miguelpduarte.me"},
            ]}/>
        </BoxContainer>
    </div>
);

export const query = graphql`
    query {
        myInfoJson {
            cv_pdf_url
            linkedin
            github
        }
    }
`;
