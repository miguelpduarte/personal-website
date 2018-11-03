import React from "react";
import positionStyles from "../css/positions.module.css";
import borderStyles from "../css/borders.module.css";
import BoxContainer from "../components/BoxContainer";
import BoxContainerList from "../components/BoxContainerList";
import Background from "../components/Background";
import profilePic from "../data/images/miguel.png";

export default () => {
    return (
        <div className={`${positionStyles.stretchinerinoVertical} ${positionStyles.verticalizerinator9001}`}>
            <Background />
            <BoxContainer>
                <img className={borderStyles.round} width="175" src={profilePic}/>
                <h1>Miguel Duarte</h1>
                <h2>Informatics and Computer Engineering Student @ FEUP</h2>
                <BoxContainerList items={[
                    {name: "GitHub", isHref: true, linksto: "https://github.com/miguelpduarte"},
                    {name: "LinkedIn", isHref: true, linksto: "https://linkedin.com/in/miguelpduarte"},
                    {name: "CV PDF", isHref: true, linksto: "https://drive.google.com/file/d/1_v428_PNMr-eWPq_rs9zJnaNKnY4bAuj/view?usp=sharing"},
                    {name: "Online CV", linksto: "cv"},
                    {name: "JS Games", isHref: true, linksto: "https://js-games.miguelpduarte.me"},
                ]}/>
            </BoxContainer>
        </div>
    );
};