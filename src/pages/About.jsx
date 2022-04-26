import React from "react";
import AboutSection from "../components/AboutSection/AboutSections";
import BannerPage from './../components/BannerPage/BannerPage';




const About = () => {



    return (
        <main>
            <BannerPage
                title="Algumas palavras"
                sub="Sobre nós"
            />
            <AboutSection/>
        </main>
    )
}

export default About