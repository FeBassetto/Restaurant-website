import React from "react";
import './Sponsors.css'
import SponsorIcon from "./SponsorIcon/SponsorIcon";
import Icon1 from '../../../../assets/img/foursquare.svg'
import Icon2 from '../../../../assets/img/tripadvisor.svg'
import Icon3 from '../../../../assets/img/yelp.svg'

const Sponsors = () => {



    return(
        <div className="sponsors">
            <SponsorIcon
                img={Icon1}
                text="foursquare"
            />
            <SponsorIcon
                img={Icon2}
                text="tripadvisor"
            />
            <SponsorIcon
                img={Icon3}
                text="yelp"
            />
        </div>
    )
}

export default Sponsors