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

    const boxes = [
        {
            title: "Smush Classico",
            price: "R$20,99",
            text: "Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate",
            img:Burger_1
        },
        {
            title: "Hambúrguer de Frango",
            price: "R$15,99",
            text: "Pão Brioche ,2 Hámburgueres, Mussarela, Bacon, Alface, Tomate",
            img:Burger_2
        },
        {
            title: "Hamburguer Orgânico",
            price: "R$25,99",
            text: "Pão Brioche ,2 Hámburguer Vegetais, Mussarela, Ovo, Alface, Tomate",
            img:Burger_3
        },
        {
            title: "Smush Triplo",
            price: "R$20,99",
            text: "Pão Brioche ,3 Hámburgueres, Mussarela, alface, cebola, Tomate",
            img:Burger_4
        },
        {
            title: "Smush Tradicional",
            price: "R$10,99",
            text: "Pão Brioche ,Hámburguer, Mussarela, alface, Cebola roxa, picles",
            img:Burger_5
        },
        {
            title:"Smush Duplo",
            price:"R$20,99",
            text:"Pão Brioche ,Hámburguer, Mussarela, Bacon, Cebola roxa, Tomate",
            img:Burger_6
        }
    ]

    return (
        <div className="menuContent">
            {boxes.map((snack,i) => (
                <BurgerBox
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