import React from 'react'
import BannerPage from '../components/BannerPage/BannerPage'
import HomeMenu from '../components/Menu/Menu';
import Portions from '../components/Portions/Portions';
import Deals from './../components/Deals/Deals';
import AppDiscount from './../components/AppDiscount/AppDiscount';



const OurMenu = () => {


    return (
        <main>
            <BannerPage
                title="Venha conferir"
                sub="Nosso Menu"
            />
            <HomeMenu/>
            <Portions
                title="Acompanhamentos para"
                sub="Seus hambúrgueres deliciosos"
                background="white"
                type="salty"
            />
            <Deals
                type="primary"
            />
            <Portions
                title="Acompanhamentos para"
                sub="Seus hambúrgueres deliciosos"
                background="white"
                type="sweet"
            />
            <AppDiscount/>
        </main>
    )
}

export default OurMenu