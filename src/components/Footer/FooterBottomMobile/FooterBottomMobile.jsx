import React from "react";
import './FooterBottomMobile.css'
import { Link } from 'react-router-dom';


const FooterBottomMobile = () => {



    return (
        <div className="footerBottomMobile">
            <Link to="/outlets">
                Veja Outlets perto de você
            </Link>
            <p> Copyright 2022 | All rights reserve |
                Created by Felipe Silveira Bassetto
            </p>
        </div>
    )
}

export default FooterBottomMobile