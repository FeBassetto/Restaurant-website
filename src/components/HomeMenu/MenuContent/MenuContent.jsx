import React, { useContext } from "react";
import './MenuContent.css';
import BurgerBox from "../../BurgerBox/BurgerBox";
import Burger_1 from '../../../assets/img/burgerProduct_1.png'
import Burger_2 from '../../../assets/img/burgerProduct_2.png'
import Burger_3 from '../../../assets/img/burgerProduct_3.png'
import Burger_4 from '../../../assets/img/burgerProduct_4.png'
import Burger_5 from '../../../assets/img/burgerProduct_5.png'
import Burger_6 from '../../../assets/img/burgerProduct_6.png'
import { SnackContext } from './../../../common/context/snacks';


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