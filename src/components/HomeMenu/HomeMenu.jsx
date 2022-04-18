import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './HomeMenu.css'
import MenuContent from "./MenuContent/MenuContent";


const HomeMenu = () => {


    return(
        <section className="HomeMenu">
            <HeaderSection
                title="Nosso Menu"
                sub="Escolha e aproveite"
                background="white"
            />
            <MenuContent/>
        </section>
    )
}

export default HomeMenu