import React from "react";
import Customers from "../components/Customers/Customers";
import Deals from "../components/Deals/Deals";
import GreenBackground from "../components/GreenBackground/GreenBackground";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Ingredients from "../components/Ingredients/Ingredients";
import Outlet from "../components/Outlet/Outlet";
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
            <Customers/>
            <Outlet/>
        </>
    )
}

export default Home