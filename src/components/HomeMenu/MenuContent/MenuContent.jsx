import React, { useContext } from "react";
import './MenuContent.css';
import BurgerBox from "../../BurgerBox/BurgerBox";
import { SnackContext } from './../../../common/context/snacks';
import Burger1 from '../../../assets/img/burgerProduct_1.png'
import Burger2 from '../../../assets/img/burgerProduct_2.png'
import Burger3 from '../../../assets/img/burgerProduct_3.png'
import Burger4 from '../../../assets/img/burgerProduct_4.png'
import Burger5 from '../../../assets/img/burgerProduct_5.png'
import Burger6 from '../../../assets/img/burgerProduct_6.png'


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