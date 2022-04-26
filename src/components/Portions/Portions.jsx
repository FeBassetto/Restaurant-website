import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import './Portions.css'
import BorderHeader from '../BorderHeader/BorderHeader';
import PortionsContent from './PortionsContent/PortionsContent';


const Portions = ({title, sub, background, type}) => {


    return(
        <section className="miniMenu">
            <HeaderSection
                title={title}
                sub={sub}
                background={background}
            />
            <BorderHeader
                color="grey"
            />
            <PortionsContent
                type={type}
            />
        </section>
    )
}

export default Portions