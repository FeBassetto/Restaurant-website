import React from "react";
import HeaderSection from "../../HeaderSection/HeaderSection";
import CustomerComents from "./CustomerComents/CustomerComents";
import './CustomersContent.css';


const CustomersContent = () => {


    return (
        <div className="customerContent">
            <HeaderSection
                background="white"
                title="Depoimentos"
                sub="Nossos clientes disseram..."
            />
            <CustomerComents/>
        </div>
    )
}

export default CustomersContent