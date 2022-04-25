import React from "react";
import DealDay from "./DealDay/DealDay";
import style from './Deals.module.css'

const Deals = ({type}) => {

    const primaryDeals = [
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

    const secondaryDeals = [
        {
            type: "secondary",
            background: "crispyFried",
            title: "Batatas fritas crocantes em rodelas",
            subTitle: "Mordida de Indulgência",
            buttonText: "Compre online",
            circleColor: "yellow",
            circleNumber: "R$17",
            circleText: "Apenas",
        },
        {
            type: "primary",
            background: "blackBurger",
            title: "Hambúrguer de Quinoa & black bean",
            subTitle: "Promoção do dia",
            buttonText: "Compre online",
            circleColor: "white",
            circleNumber: "R$14",
            circleText: "Apenas",
        },
        {
            type: "secondary",
            background: "farmhouse",
            title: "O Hambúrguer da Fazenda",
            subTitle: "Hambúrguer do mês",
            buttonText: "Compre online",
            circleColor: "green",
            circleNumber: "R$12",
            circleText: "Apenas",
        },
    ]

    return (
        <section className={style.container}>
            {type === 'primary' && primaryDeals.map(deal => (
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