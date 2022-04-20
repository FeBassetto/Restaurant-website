import React from "react";
import CustomerBackground from "./CustomerBackground/CustomerBackground";
import './Customers.css';
import CustomersContent from "./CustomersContent/CustomersContent";


const Customers = () => {



    return(
        <section className="customers">
            <CustomersContent/>
            <CustomerBackground/>
        </section>
    )
}

export default Customers