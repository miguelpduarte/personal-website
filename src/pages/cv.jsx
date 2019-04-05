import React from "react";
import Layout from "../components/Layout";
import positionsStyles from "../css/positions.module.css";
import marginStyles from "../css/margins.module.css";
import CVExperience from "../components/cv/experience/CVExperience";
import CVSidebar from "../components/cv/sidebar/CVSidebar";
import CVProjects from "../components/cv/projects/CVProjects";
import CVEducation from "../components/cv/education/CVEducation";
import CVHeader from "../components/cv/CVHeader";

export default () => (
    <Layout>
        <CVHeader/>

        <div className={positionsStyles.unbalancedTwoColumnContainer}>
            <div className={marginStyles.rightSmall}>
                <CVExperience/>
                <CVEducation/>
                <CVProjects/>
            </div>

            <CVSidebar/>
        </div>
    </Layout>
);
