import React from "react";
import GreenBackground from "../../GreenBackground/GreenBackground";
import './ContentAppDiscount.css'

import PlayStore from '../../../assets/img/playStore_dowload.png'
import IOS from '../../../assets/img/IOS_dowload.png'

const ContentAppDiscount = ({ title, sub }) => {



    return (
        <div className="contentAppDiscount">
            <div className="contentAppDiscount__container">
                <p className="contentAppDiscount__title">{title}</p>
                <p className="contentAppDiscount__sub">{sub}</p>
                <img
                    src={PlayStore}
                    alt="Play Store icon"
                    className="contentAppDiscount__icon 
                contentAppDiscount__icon--playsStore" />
                <img
                    src={IOS}
                    alt="IOS store icon"
                    className="contentAppDiscount__icon 
                contentAppDiscount__icon--IOS" />
            </div>
        </div>
    )
}

export default ContentAppDiscount