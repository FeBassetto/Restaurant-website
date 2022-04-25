import React from 'react'
import BannerOurMenu from '../components/BannerOurMenu/BannerOurMenu'
import HomeMenu from '../components/Menu/Menu';
import Portions from '../components/Portions/Portions';
import Deals from './../components/Deals/Deals';
import AppDiscount from './../components/AppDiscount/AppDiscount';



const OurMenu = () => {


    return (
        <main>
            <BannerOurMenu/>
            <HomeMenu/>
            <Portions
                title="Acompanhamentos para"
                sub="Seus hambúrgueres deliciosos"
                background="white"
                type="salty"
            />
            <Deals/>
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