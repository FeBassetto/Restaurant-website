import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './Menu.css'
import MenuContent from "./MenuContent/MenuContent";


const HomeMenu = () => {


    return (
        <section className="HomeMenu">
            <HeaderSection
                title="Variedade de"
                sub="Hambúrgueres deliciosos"
                background="white"
            />
            <MenuContent />
        </section>
    )
}

export default HomeMenu