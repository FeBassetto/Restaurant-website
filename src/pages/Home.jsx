import React from "react";
import AppDiscount from "../components/AppDiscount/AppDiscount";
import Benefits from "../components/Benefits/Benefits";
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
            <GreenBackground type="banner">
                <HomeBanner />
            </GreenBackground>
            <Deals/>
            <Ingredients/>
            <HomeMenu/>
            <Customers/>
            <Outlet/>
            <Benefits/>
            <AppDiscount/>
        </>
    )
}

export default Home