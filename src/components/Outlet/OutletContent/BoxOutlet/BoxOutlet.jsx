import React from "react";
import './BoxOutlet.css';
import {MdLocationOn} from 'react-icons/md'

const BoxOutlet = ({img, local, tel}) => {


    return(
        <div className="boxOutlet">
            <img src={img} alt={local} 
            className="boxOutlet__image" />
            <MdLocationOn className="boxOutlet__icon"/>
            <p className="boxOutlet__local">{local}</p>
            <p className="boxOutlet__tel">{tel}</p>
        </div>
    )
}

export default BoxOutlet