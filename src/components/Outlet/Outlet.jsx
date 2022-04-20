import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './Outlet.css'


const Outlet = () => {


    return(
        <section className="outlet">
            <HeaderSection
                background="white"
                title="Nossos Outlets"
                sub="Encontre um Outlet próximo a você"
            />
            
        </section>
    )
}

export default Outlet