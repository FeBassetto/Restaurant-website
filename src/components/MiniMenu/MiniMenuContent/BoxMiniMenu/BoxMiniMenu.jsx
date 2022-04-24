import React from "react";
import './BoxMiniMenu.css'



const BoxMiniMenu = ({ img, title, sub, price }) => {



    return (
        <div className="boxMiniMenu">
            <img
                src={img}
                alt={title}
                className="boxMiniMenu__image"
            />
            <p className="boxMiniMenu__title">{title}</p>
            <p className="boxMiniMenu__sub">{sub}</p>
            <p className="boxMiniMenu__price">R${price}</p>
        </div>
    )
}

export default BoxMiniMenu