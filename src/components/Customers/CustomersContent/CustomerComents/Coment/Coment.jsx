import React from "react";
import './Coment.css'


const Coment = ({text, type}) => {


    return(
        <div>
            <p className={`coment coment--${type}`}>
                {text}
            </p>
        </div>
    )
}

export default Coment