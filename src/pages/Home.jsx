import React from "react";
import Deals from "../components/Deals/Deals";
import GreenBackground from "../components/GreenBackground/GreenBackground";
import HomeBanner from "../components/HomeBanner/HomeBanner";


const Home = () => {

    return (
        <>
            <GreenBackground>
                <HomeBanner />
            </GreenBackground>
            <Deals/>
        </>
    )
}

export default Home