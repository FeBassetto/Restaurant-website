import React from "react";
import './SponsorIcon.css'



const SponsorIcon = ({img, text}) => {



    return(
        <div className={`sponsoricon sponsoricon--${text}`}>
            <img src={img} alt={text} />
            <p>{text}</p>
        </div>
    )
}

export default SponsorIcon