import React, { useState } from "react";
import './Header.css';
import Logo from '../../assets/img/logo.svg'
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import User from "./User/User";
import { useEffect } from "react";

const Header = () => {

    const [user, setUser] = useState('')
    const [logged, setLogged] = useState(false)
    const [shopItems, setShopItems] = useState(1)

    useEffect(() => {
        setLogged(user ? true : false)
    }, [user])

    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img src={Logo} alt="Logo BurgerNation" className="header__logo" />
            </Link>
            <Menu />
            <User user={user} shopItems={shopItems} logged={logged} />
        </header>
    )
}

export default Header