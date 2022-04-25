import React from "react";
import GreenBackground from "../GreenBackground/GreenBackground";
import './BannerPage.css'


const BannerPage = ({title, sub}) => {



    return(
        <section className="bannerPage">
            <GreenBackground>
                <p className="bannerPage__title">{title}</p>
                <p className="bannerPage__sub">{sub}</p>
            </GreenBackground>
        </section>
    )
}

export default BannerPage