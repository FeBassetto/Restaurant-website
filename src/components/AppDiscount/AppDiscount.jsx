import React from 'react'
import './AppDiscount.css'
import BackgroundAppDiscount from './BackgroundAppDiscount/BackgroundAppDiscount'
import ContentAppDiscount from './ContentAppDiscount/ContentAppDiscount'


const AppDiscount = () => {



    return (
        <section className='appDiscount'>
            <BackgroundAppDiscount />
            <ContentAppDiscount
                title="Ganhe 35% de desconto"
                sub="Ganhe 20% de desconto no seu 
                primeiro pedido através do aplicativo Burger Nation"
            />
        </section>
    )
}

export default AppDiscount