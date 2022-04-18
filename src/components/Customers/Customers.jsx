import React from "react";
import './Customers.css';
import styled from 'styled-components';
import CustomersContent from "./CustomersContent/CustomersContent";


const CustomersSection = styled.section`
    background-color: #f4f4f4;
    height:1900px;
`

const Customers = () => {



    return(
        <CustomersSection className="customers">
            <CustomersContent/>
        </CustomersSection>
    )
}

export default Customers