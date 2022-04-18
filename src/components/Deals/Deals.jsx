import React from "react";
import DealDay from "./DealDay/DealDay";
import style from './Deals.module.css'

const Deals = () => {

    const deals = [
        {
            type: "primary",
            background: "hamburger",
            title: "Hambúrguer com Coca-cola dupla",
            subTitle: "Promoção do dia",
            buttonText: "Compre online",
            circleColor: "white",
            circleNumber: "R$15",
            circleText: "Apenas"
        },
        {
            type: "secondary",
            background: "potatos",
            title: "Hambúrguer com Coca-cola dupla",
            subTitle: "Promoção do dia",
            buttonText: "Compre online",
            circleColor: "yellow",
            circleNumber: "R$12",
            circleText: "Apenas"
        },
        {
            type: "secondary",
            background: "hamburger",
            title: "Hambúrguer com Coca-cola dupla",
            subTitle: "Promoção do dia",
            buttonText: "Compre online",
            circleColor: "green",
            circleNumber: "R$10",
            circleText: "Apenas",
        }
    ]

    return (
        <section className={style.container}>
            {deals.map(deal => (
                <DealDay
                    type={deal.type}
                    background={deal.background}
                    title={deal.title}
                    subTitle={deal.subTitle}
                    buttonText={deal.buttonText}
                    circleColor={deal.circleColor}
                    circleNumber={deal.circleNumber}
                    circleText={deal.circleText}
                />
            ))}
        </section>
    )
}

export default Deals