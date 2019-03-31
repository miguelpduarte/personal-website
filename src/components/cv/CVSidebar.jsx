import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CVSkills from "./skills/CVSkills";
import CVContacts from "./CVContacts";
import CVInterests from "./interests/CVInterests";

const CVSidebar = ({data}) => (
    <aside>
        <CVContacts/>
        <a href={data.myInfoJson.cv_pdf_url}><h1>CV PDF</h1></a>
        <h1>Languages</h1>
        <h1>Certificates</h1>
        <CVSkills/>
        <CVInterests/>
    </aside>
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
                myInfoJson {
                    cv_pdf_url
                }
            }
        `}
        render={data => <CVSidebar data={data} {...props} />}
    />
);