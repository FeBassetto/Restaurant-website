import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './MiniMenu.css'
import BorderHeader from './../BorderHeader/BorderHeader';
import MiniMenuContent from "./MiniMenuContent/MiniMenuContent";


const MiniMenu = () => {


    return(
        <section>
            <HeaderSection
                title="Acompanhamentos para"
                sub="Seus hambúrgueres deliciosos"
                background="white"
            />
            <BorderHeader/>
            <MiniMenuContent/>
        </section>
    )
}

export default MiniMenu