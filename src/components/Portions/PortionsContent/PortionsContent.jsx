import React, { useContext } from "react";
import './PortionsContent.css'
import BoxPortionsMenu from './BoxPortionsMenu/BoxPortionsMenu';
import chicken from '../../../assets/img/miniMenu_chicken.png'
import fries from '../../../assets/img/miniMenu_fries.png'
import potatos from '../../../assets/img/miniMenu_potatos.png'
import salad from '../../../assets/img/miniMenu_salad.png'
import crispy from '../../../assets/img/miniMenu_crispy.png'
import chickenSalad from '../../../assets/img/miniMenu_chickenSalad.png'
import { SaltyContext } from './../../../common/context/salty';


const PortionsContent = ({ type }) => {

    const salty = useContext(SaltyContext)
    const sweet = []

    return (
        <div className="miniMenuContent">
            {type === 'salty' ?
                salty.map(portion => (
                    <BoxPortionsMenu
                        img={portion.img}
                        title={portion.title}
                        sub={portion.sub}
                        price={portion.price}
                    />
                ))
                :
                sweet.map(portion => (
                    <BoxPortionsMenu
                        img={portion.img}
                        title={portion.title}
                        sub={portion.sub}
                        price={portion.price}
                    />
                ))
            }

        </div>
    )
}

export default PortionsContent