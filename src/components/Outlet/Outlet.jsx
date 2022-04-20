import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './Outlet.css'
import OutletContent from "./OutletContent/OutletContent";


const Outlet = () => {


    return(
        <section className="outlet">
            <HeaderSection
                background="white"
                title="Nossos Outlets"
                sub="Encontre um Outlet próximo a você"
            />
            <OutletContent/>
        </section>
    )
}

export default Outlet