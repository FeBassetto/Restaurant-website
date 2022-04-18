import React from "react";
import Deals from "../components/Deals/Deals";
import GreenBackground from "../components/GreenBackground/GreenBackground";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Ingredients from "../components/Ingredients/Ingredients";
import HomeMenu from './../components/HomeMenu/HomeMenu';


const Home = () => {

    return (
        <>
            <GreenBackground>
                <HomeBanner />
            </GreenBackground>
            <Deals/>
            <Ingredients/>
            <HomeMenu/>
        </>
    )
}

export default Home