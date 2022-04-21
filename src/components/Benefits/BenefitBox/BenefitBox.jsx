import React from "react";
import './BenefitBox.css'


const BenefitBox = ({ img, title, sub }) => {



    return (
        <div className="benefitBox">
            <div className="benefitBox__backgroundImage">
                <img
                    src={img}
                    alt={title}
                    className="benefitBox__image" />
            </div>
            <p className="benefitBox__title">
                {title}
            </p>
            <p className="benefitBox__sub">
                {sub}
            </p>
        </div>
    )
}

export default BenefitBox