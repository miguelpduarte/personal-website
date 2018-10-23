import React from "react";
import BoxContainer from "../components/BoxContainer";
import Layout from "../components/Layout";

export default () => (
    <Layout>
        <h1>Test Homepage</h1>
        <BoxContainer
            items={
                [
                    {name: "Online CV", linksto: "cv"},
                    {name: "Home", linksto: "/"},
                    {name: "Homepage", linksto: "/homepage"},
                ]
            }
        />
    </Layout>
);