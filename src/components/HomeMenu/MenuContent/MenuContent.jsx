import React, { useContext } from "react";
import './MenuContent.css';
import BurgerBox from "../../BurgerBox/BurgerBox";
import { SnackContext } from './../../../common/context/snacks';
import Burger from '../../../assets/img/burgerProduct_6.png'


const MenuContent = () => {

    const {snacks} = useContext(SnackContext)

    return (
        <div className="menuContent">
            {snacks.map(snack => (
                <BurgerBox
                    key={snack.title}
                    title={snack.title}
                    price={snack.price}
                    text={snack.text}
                    url={snack.img}
                />
            ))}
        </div>
    )
}

export default MenuContent