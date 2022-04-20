import React from "react";
import './RightComents.css'
import Profile from './../Profile/Profile';
import Stars from './../Stars/Stars';
import Coment from './../Coment/Coment';
import userImage2 from '../../../../../assets/img/customer_2.png'
import userImage3 from '../../../../../assets/img/customer_3.png'


const RightComents = () => {



    return(
        <div className="rightComents">
            <div className="coment__container">
            <Profile
                img={userImage2}
                userName="Reginaldo Silva"
                reviews={"105"} />
            <Stars
                number="4"
                weeks="3"
            />
            <Coment
                text="Primeira vez no BurgerNation e você tem que ir!
                É o cantinho mais fofo com comida incrível. Seus hambúrgueres
                é de morrer. FOI FOGO!! O serviço que recebemos foi tão incrível e 
                nós definitivamente voltaremos novamente. Eles nos fizeram sentir 
                bem-vindos e nos proporcionaram uma experiência incrível."
                type="secondary"
            />
            </div>
            <div className="coment__container">
            <Profile
                img={userImage3}
                userName="Natália Midori"
                reviews={"341"} />
            <Stars
                number="4"
                weeks="2"
            />
            <Coment
                text="É uma ótima experiência. O ambiente é muito acolhedor 
                e charmoso. Vinhos, comida e serviço incríveis. 
                Os funcionários são extremamente experientes e fazem 
                ótimas recomendações."
                type="secondary"
            />
            </div>
        </div>
    )
}

export default RightComents