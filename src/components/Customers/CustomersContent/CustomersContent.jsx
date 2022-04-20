import React from "react";
import HeaderSection from "../../HeaderSection/HeaderSection";
import CustomerComents from "./CustomerComents/CustomerComents";
import './CustomersContent.css';
import Sponsors from "./Sponsors/Sponsors";


const CustomersContent = () => {


    return (
        <div className="customerContent">
            <HeaderSection
                background="white"
                title="Depoimentos"
                sub="Nossos clientes disseram..."
            />
            <CustomerComents/>
            <Sponsors/>
        </div>
    )
}

export default CustomersContent