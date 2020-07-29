import React from "react";
import { graphql, StaticQuery } from "gatsby";
import CVCertificateItem from "./CVCertificateItem";
import CVSection from "../../CVSection";

const CVCertificates = ({ data }) => (
    <CVSection title="Certificates">
        {data.allCertificatesJson.nodes.map((node, index) => (
            <CVCertificateItem key={index} node={node}/>
        ))}
    </CVSection>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allCertificatesJson {
                  nodes {
                    name
                    link
                    subtitle
                  }
                }
            }
        `}
        render={(data) => <CVCertificates data={data} {...props} />}
    />
);
