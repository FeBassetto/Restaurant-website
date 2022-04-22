import React from "react";
import './FooterBottomDesktop.css'
import { Link } from 'react-router-dom';


const FooterBottomDesktop = () => {



    return (
        <div className="footerBottom">
            <div className="copyright">
                <p className="copyright__content">
                    Copyright 2022 | All rights reserve |
                    Created by Felipe Silveira Bassetto
                </p>
            </div>
            <div className="outlets">
                <Link to="/outlets">
                    Veja Outlets perto de você
                </Link>
            </div>
        </div>
    )
}

export default FooterBottomDesktop