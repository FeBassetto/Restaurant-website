import React, { useState } from "react";
import './Header.css';
import Logo from '../../assets/img/logo.svg'
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import User from "./User/User";


const Header = () => {

    const [user, setUser] = useState('Felipe')
    const [shopItems, setShopItems] = useState(1)

    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img src={Logo} alt="Logo BurgerNation" className="header__logo" />
            </Link>
            <Menu />
            <User user={user} shopItems={shopItems} />
        </header>
    )
}

export default Header