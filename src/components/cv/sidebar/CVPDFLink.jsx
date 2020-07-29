import React from "react";
import { graphql, StaticQuery } from "gatsby";
import CVSection from "../CVSection";

const CVPDFLink = ({ data }) => (
    <a href={data.myInfoJson.cv_pdf_url}>
        <CVSection title="CV PDF"/>
    </a>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                myInfoJson {
                    cv_pdf_url
                }
            }
        `}
        render={(data) => <CVPDFLink data={data} {...props} />}
    />
);
