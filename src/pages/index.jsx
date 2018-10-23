import React from "react";
import BoxContainer from "../components/BoxContainer";
import Layout from "../components/Layout";

export default () => (
    <div>
        <Layout>
            <h1>WIP - Work in Progress!</h1>
            <h2>Built with love by miguelpduarte</h2>
            <BoxContainer
                items={
                    [
                        {name: "GitHub", isHref: true, linksto: "https://github.com/miguelpduarte"},
                        {name: "LinkedIn", isHref: true, linksto: "https://linkedin.com/in/miguelpduarte"},
                        {name: "Test Homepage", linksto: "/homepage"},
                        {name: "My CV PDF", isHref: true, linksto: "https://drive.google.com/file/d/1_v428_PNMr-eWPq_rs9zJnaNKnY4bAuj/view?usp=sharing"},
                        {name: "Online CV", linksto: "cv"},
                        {name: "JS Games", isHref: true, linksto: "https://js-games.miguelpduarte.me"},
                    ]
                }
            />
        </Layout>
    </div>
);