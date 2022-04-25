import React from 'react'
import BannerOurMenu from '../components/BannerOurMenu/BannerOurMenu'
import HomeMenu from '../components/Menu/Menu';
import MiniMenu from '../components/Portions/Portions';
import Deals from './../components/Deals/Deals';



const OurMenu = () => {


    return (
        <main>
            <BannerOurMenu/>
            <HomeMenu/>
            <MiniMenu/>
            <Deals/>
        </main>
    )
}

export default OurMenu