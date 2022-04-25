import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './Portions.css'
import BorderHeader from '../BorderHeader/BorderHeader';
import PortionsContent from './PortionsContent/PortionsContent';


const Portions = () => {


    return(
        <section className="miniMenu">
            <HeaderSection
                title="Acompanhamentos para"
                sub="Seus hambúrgueres deliciosos"
                background="white"
            />
            <BorderHeader/>
            <PortionsContent/>
        </section>
    )
}

export default Portions