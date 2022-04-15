import React from "react";
import BackgroundBanner from "./BackgroundBanner/BackgroundBanner";
import BannerContent from "./BannerContent/BannerContent";
import './HomeBanner.css'

const HomeBanner = () => {

    const texts = {
        subPrice: "Apenas R$10,99",
        title: "The Smoking Burger",
        discount: "15%",
        discountText: "Desconto",
        discountTitle: "Na sua primeira encomenda, se encomendar através do nosso Site!",
        buttonText: "Compre Online"
    }


    return (
        <div className="container">
            <BannerContent {...texts} />
            <BackgroundBanner/>
        </div>
    )
}

export default HomeBanner