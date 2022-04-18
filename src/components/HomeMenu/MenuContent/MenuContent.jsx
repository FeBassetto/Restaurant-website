import React from "react";
import './MenuContent.css';
import BurgerBox from "../../BurgerBox/BurgerBox";
import Burger_1 from '../../../assets/img/burgerProduct_1.png'
import Burger_2 from '../../../assets/img/burgerProduct_2.png'
import Burger_3 from '../../../assets/img/burgerProduct_3.png'
import Burger_4 from '../../../assets/img/burgerProduct_4.png'
import Burger_5 from '../../../assets/img/burgerProduct_5.png'
import Burger_6 from '../../../assets/img/burgerProduct_6.png'


const MenuContent = () => {



    return (
        <div className="menuContent">
            <BurgerBox
                url={Burger_1}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
            <BurgerBox
                url={Burger_2}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
            <BurgerBox
                url={Burger_3}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
            <BurgerBox
                url={Burger_4}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
            <BurgerBox
                url={Burger_5}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
            <BurgerBox
                url={Burger_6}
                title="Smush Classico"
                price="R$20,99"
                text="Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate"
            />
        </div>
    )
}

export default MenuContent