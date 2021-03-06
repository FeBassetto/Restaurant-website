import React, { useState } from "react";
import './Header.css';
import { useEffect } from "react";
import LogoHeader from './LogoHeader/LogoHeader';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";

const Header = () => {

    const [user, setUser] = useState('Felipe')
    const [logged, setLogged] = useState(false)
    const [shopItems, setShopItems] = useState(0)

    useEffect(() => {
        setLogged(user ? true : false)
    }, [user])

    return (
        <header className="header">
            <LogoHeader />
            <div className="mobile">
                <NavbarMobile
                    user={user}
                    logged={logged}
                    shopItems={shopItems} />
            </div>
            <div className="desktop">
                <NavbarDesktop
                    user={user}
                    logged={logged}
                    shopItems={shopItems}
                />
            </div>
        </header>
    )
}

export default Header