import React from "react";
import BorderHeader from "../BorderHeader/BorderHeader";
import './AboutSection.css'
import AboutSectionContent from './AboutSectionContent/AboutSectionContent';



const AboutSection = () => {



    return (
        <section className="aboutSection">
            <BorderHeader
                color="white"
            />
            <AboutSectionContent/>
        </section>
    )
}

export default AboutSection