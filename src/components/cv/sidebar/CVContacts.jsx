import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CVSection from "../CVSection";

const CVContacts = ({data}) => (
    <CVSection title="Contacts">
        <ul>
            <li><a href={"mailto:" + data.myInfoJson.email}>{data.myInfoJson.email}</a></li>
            <li><a href={data.myInfoJson.linkedin}>{data.myInfoJson.linkedin}</a></li>
            <li><a href={data.myInfoJson.github}>{data.myInfoJson.github}</a></li>
        </ul>
    </CVSection>
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
                myInfoJson {
                    email
                    linkedin
                    github
                }
            }
        `}
        render={data => <CVContacts data={data} {...props} />}
    />
);