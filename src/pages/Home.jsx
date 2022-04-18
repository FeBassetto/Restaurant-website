import React from "react";
import Deals from "../components/Deals/Deals";
import GreenBackground from "../components/GreenBackground/GreenBackground";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Ingredients from "../components/Ingredients/Ingredients";


const Home = () => {

    return (
        <>
            <GreenBackground>
                <HomeBanner />
            </GreenBackground>
            <Deals/>
            <Ingredients/>
        </>
    )
}

export default Home