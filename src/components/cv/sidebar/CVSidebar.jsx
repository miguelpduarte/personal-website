import React from "react";
import CVSkills from "./skills/CVSkills";
import CVContacts from "./CVContacts";
import CVInterests from "./interests/CVInterests";
import CVLanguages from "./languages/CVLanguages";
import CVCertificates from "./certificates/CVCertificates";
import CVPDFLink from "./CVPDFLink";

export default () => (
    <aside>
        <CVContacts/>
        <CVPDFLink/>
        <CVLanguages/>
        <CVCertificates/>
        <CVSkills/>
        <CVInterests/>
    </aside>
);