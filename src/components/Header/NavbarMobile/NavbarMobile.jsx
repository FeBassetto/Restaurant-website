import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import './NavbarMobile.css'
import Cart from "../../cart/cart";


const NavbarMobile = ({ logged, shopItems, user }) => {

    const [activeMenu, setAcitveMenu] = useState(false)
    const navbar = document.getElementById('Navbar__navigation')
    const items = document.querySelectorAll('.Navbar__link--active')

    useEffect(() => {
        if (activeMenu) {
            for(const item of items){
                item.addEventListener('click', activeHamburguer)
            }
        }
    }, [activeMenu])

    function activeHamburguer() {
        if (!activeMenu) {
            navbar.classList?.remove("Navbar__navigation")
            navbar.classList?.add("Navbar__navigation--active")
            setAcitveMenu(true)
        } else {
            navbar.classList?.remove("Navbar__navigation--active")
            navbar.classList?.add("Navbar__navigation")
            setAcitveMenu(false)
        }
    }

    return (
        <nav className="Navbar">
            <ul className="Navbar__user">
                <li key="user-login">
                    <Link to="/"
                        className="Navbar__link">
                        <AiOutlineUser />
                        <span className="userName">{logged ? user : "Cadastre-se"}</span>
                    </Link>
                </li>
                <li key="user-cart">
                    <Link to="/"
                        className="Navbar__link">
                        <Cart number={shopItems} />
                    </Link>
                </li>
            </ul>
            <ul
                className="Navbar__navigation ."
                id="Navbar__navigation">

                <li
                    onClick={() => activeHamburguer()}
                    key="icons"
                    className="Navbar__navigation__item 
                Navbar__navigation__item--icons 
                Navbar__navigation__item--hamburger--active">
                    <Link to="/"
                        className="Navbar__link">
                        <GiHamburgerMenu className="hamburger" />
                        <AiOutlineClose className="close" />
                    </Link>
                </li>

                <li
                    className="Navbar__navigation__item--active"
                    key="Home">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Home
                    </Link>
                </li>
                <li
                    key="Nosso-menu"
                    className="Navbar__navigation__item--active">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Nosso Menu
                    </Link>
                </li>
                <li
                    key="Ofertas"
                    className="Navbar__navigation__item--active">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Ofertas
                    </Link>
                </li>
                <li
                    className="Navbar__navigation__item--active"
                    key="Sobre">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Sobre
                    </Link>
                </li>
                <li
                    className="Navbar__navigation__item--active"
                    key="Franquia">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Franquia
                    </Link>
                </li>
                <li
                    className="Navbar__navigation__item--active"
                    key="Contato">
                    <Link to="/"
                        className="Navbar__link 
                    Navbar__link--active">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarMobile