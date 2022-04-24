import React from "react";
import GreenBackground from "../GreenBackground/GreenBackground";
import './BannerOurMenu.css'


const BannerOurMenu = () => {



    return(
        <section className="bannerOurMenu">
            <GreenBackground>
                <p className="bannerOurMenu__title">Venha conferir</p>
                <p className="bannerOurMenu__sub">Nosso Menu</p>
            </GreenBackground>
        </section>
    )
}

export default BannerOurMenu