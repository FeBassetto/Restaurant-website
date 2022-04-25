import React from 'react'
import BannerOurMenu from '../components/BannerOurMenu/BannerOurMenu'
import HomeMenu from '../components/Menu/Menu';
import Portions from '../components/Portions/Portions';
import Deals from './../components/Deals/Deals';



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
        </main>
    )
}

export default OurMenu