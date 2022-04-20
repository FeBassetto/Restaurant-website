import React from "react";
import './LeftComents.css'
import userImage from '../../../../../assets/img/customer_1.png'
import Profile from "./../Profile/Profile";
import Stars from './../Stars/Stars';
import Coment from './../Coment/Coment';

const LeftComents = () => {



    return (
        <div className="leftComents">
            <Profile
                img={userImage}
                userName="Felipe Bassetto"
                reviews={"45"} />
            <Stars
                number="5"
                weeks="5"
            />
            <Coment
                text="Este restaurante acolhedor deixou as melhores impressões! 
                Anfitriões hospitaleiros, pratos deliciosos e bebida bela apresentação,
                ampla carta de vinhos e sobremesa maravilhosa. Eu recomendo a todos!
                Eu adoraria voltar aqui novamente."
                type="primary"
            />
        </div>
    )
}

export default LeftComents