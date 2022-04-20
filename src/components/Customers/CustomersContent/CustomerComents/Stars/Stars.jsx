import React from "react";
import './Stars.css'
import {RiStarSFill} from 'react-icons/ri' //Estrela cheia
import {RiStarSLine} from 'react-icons/ri' //Estrela vazia

const Stars = ({number, weeks}) => {


    return(
        <div className="stars__container">
            <div className="stars">
                {number > 0 ? <RiStarSFill/>: <RiStarSLine/>}
                {number > 1 ? <RiStarSFill/>: <RiStarSLine/>}
                {number > 2 ? <RiStarSFill/>: <RiStarSLine/>}
                {number > 3 ? <RiStarSFill/>: <RiStarSLine/>}
                {number > 4 ? <RiStarSFill/>: <RiStarSLine/>}
            </div>
            <p className="weeks">{weeks} weeks ago</p>
        </div>
    )
}

export default Stars