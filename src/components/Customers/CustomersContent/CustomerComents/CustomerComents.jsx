import React from "react";
import './CustomerComents.css';
import LeftComents from "./LeftComents/LeftComents";
import RightComents from "./RightComents/RightComents";


const CustomerComents = () => {



    return (
        <div className="customerComents">
            <LeftComents />
            <RightComents />
        </div>
    )
}

export default CustomerComents