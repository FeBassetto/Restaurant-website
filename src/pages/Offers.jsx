import React from "react";
import BannerPage from "../components/BannerPage/BannerPage";
import Deals from './../components/Deals/Deals';
import AppDiscount from './../components/AppDiscount/AppDiscount';


const Offers = () => {



    return (
        <main className="offers">
            <BannerPage
                title="Confira nossas"
                sub="Ofertas"
            />
            <Deals
                type="primary"
            />
            <Deals
                type="secondary"
            />
            <AppDiscount/>
        </main>
    )
}

export default Offers