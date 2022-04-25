import React, { useContext } from "react";
import './PortionsContent.css'
import BoxPortionsMenu from './BoxPortionsMenu/BoxPortionsMenu';
import chicken from '../../../assets/img/miniMenu_chicken.png'
import fries from '../../../assets/img/miniMenu_fries.png'
import potatos from '../../../assets/img/miniMenu_potatos.png'
import salad from '../../../assets/img/miniMenu_salad.png'
import crispy from '../../../assets/img/miniMenu_crispy.png'
import chickenSalad from '../../../assets/img/miniMenu_chickenSalad.png'

import tart from '../../../assets/img/portions_tart.png'
import chocolate from '../../../assets/img/portions_chocolate.png'
import apple from '../../../assets/img/portions_apple.png'
import caramel from '../../../assets/img/portions_caramel.png'
import iceCream from '../../../assets/img/portions_iceCream.png'
import shake from '../../../assets/img/portions_shake.png'

import { SaltyContext } from './../../../common/context/salty';
import SweetContext from './../../../common/context/sweet';


const PortionsContent = ({ type }) => {

    const salty = useContext(SaltyContext)
    const sweet = useContext(SweetContext)

    return (
        <div className="miniMenuContent">
            {type === 'salty' ?
                salty.map(portion => (
                    <BoxPortionsMenu
                        key={portion.id}
                        img={portion.img}
                        title={portion.title}
                        sub={portion.sub}
                        price={portion.price}
                    />
                ))
                :
                sweet.map(portion => (
                    <BoxPortionsMenu
                        key={portion.id}
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