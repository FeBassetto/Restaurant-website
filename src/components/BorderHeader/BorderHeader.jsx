import React from "react";
import './BorderHeader.css'



const BorderHeader = ({color}) => {



    return (
        <div className={`container_borderHeader`}>
            <div className={`border__header border__header--${color}`}></div>
        </div>
    )
}

export default BorderHeader