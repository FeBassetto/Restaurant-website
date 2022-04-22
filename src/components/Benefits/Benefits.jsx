import React from "react";
import './Benefits.css'
import BenefitBox from './BenefitBox/BenefitBox';
import Clock from '../../assets/img/clock.svg'
import Truck from '../../assets/img/truck.svg'
import Burger from '../../assets/img/burger.svg'

const Benefits = () => {



    return (
        <section className="benefits">
            <BenefitBox
                img={Clock}
                title="Entrega no prazo"
                sub="Entrega mais rápida em boas condições direto para você"
            />
            <BenefitBox
                img={Truck}
                title="Frete grátis no primeiro pedido"
                sub="Entrega mais rápida em boas condições direto para você"
            />
            <BenefitBox
                img={Burger}
                title="Variedade de pratos"
                sub="Tenha acesso aos nossos deliciosos pacotes especiais todos os dias"
            />
        </section>
    )
}

export default Benefits