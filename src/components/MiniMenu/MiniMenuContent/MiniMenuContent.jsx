import React from "react";
import './MiniMenuContent.css'
import BoxMiniMenu from './BoxMiniMenu/BoxMiniMenu';
import chicken from '../../../assets/img/miniMenu_chicken.png'
import fries from '../../../assets/img/miniMenu_fries.png'
import potatos from '../../../assets/img/miniMenu_potatos.png'
import salad from '../../../assets/img/miniMenu_salad.png'
import crispy from '../../../assets/img/miniMenu_crispy.png'
import chickenSalad from '../../../assets/img/miniMenu_chickenSalad.png'


const MiniMenuContent = () => {


    return(
        <div className="miniMenuContent">
            <BoxMiniMenu
                img={chicken}
                title="4 pedaços de asas de frango"
                sub="Asas de frango frito"
                price="10,99"
            />

            <BoxMiniMenu
                img={fries}
                title="Batatas fritas famosas do BN"
                sub="Batatas Fritas"
                price="20,99"
            />

            <BoxMiniMenu
                img={potatos}
                title="Fatias de batata"
                sub="Batata Assada"
                price="12,99"
            />

            <BoxMiniMenu
                img={salad}
                title="Salada de primavera"
                sub="Salada verde"
                price="7,99"
            />

            <BoxMiniMenu
                img={crispy}
                title="Sanduíche de frango crocante"
                sub="Sanduíche de frango"
                price="24,99"
            />

            <BoxMiniMenu
                img={chickenSalad}
                title="Salada de galinha"
                sub="Salada com frango"
                price="14,99"
            />
        </div>  
    )
}

export default MiniMenuContent