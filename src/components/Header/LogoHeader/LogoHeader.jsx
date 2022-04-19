import React from "react";
import Logo from '../../../assets/img/logo.svg'
import { Link } from "react-router-dom";
import './LogoHeader.css'

const LogoHeader = () => {

    return(
        <Link to="/">
            <img src={Logo} alt="Logo" />
        </Link>
    )
}

export default LogoHeader