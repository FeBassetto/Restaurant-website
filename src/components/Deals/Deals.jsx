import React from "react";
import DealDay from "./DealDay/DealDay";
import style from './Deals.module.css'

const Deals = () => {


    return (
        <section className={style.container}>
            <DealDay
                type="primary"
                background="hamburger"
                title="Hambúrguer com Coca-cola dupla"
                subTitle="Promoção do dia"
                buttonText="Compre online"
                circleColor="white"
                circleNumber="R$15"
                circleText="Apenas"
            />
            <DealDay
                type="secondary"
                background="potatos"
                title="Hambúrguer com Coca-cola dupla"
                subTitle="Promoção do dia"
                buttonText="Compre online"
                circleColor="yellow"
                circleNumber="R$12"
                circleText="Apenas" />
            <DealDay
                type="secondary"
                background="hamburger"
                title="Hambúrguer com Coca-cola dupla"
                subTitle="Promoção do dia"
                buttonText="Compre online"
                circleColor="green"
                circleNumber="R$10"
                circleText="Apenas" />
        </section>
    )
}

export default Deals