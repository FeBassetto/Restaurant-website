import React from "react";
import { Link } from "react-router-dom";
import './NavbarDesktop.css';
import { AiOutlineUser } from 'react-icons/ai'
import Cart from './../../cart/cart';

const NavbarDesktop = ({ logged, shopItems, user }) => {



    return (
        <nav className="Navbar__desktop">
            <ul className="navigation">
                <li>
                    <Link to="/" className="navigation__item navigation__item--active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        Nosso Menu
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        Ofertas
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        Franquia
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        Contato
                    </Link>
                </li>
            </ul>
            <ul className="user">
                <li>
                    <Link to="/" className="navigation__item">
                        <AiOutlineUser />
                        {logged ? user : "Cadastre-se"}
                    </Link>
                </li>
                <li>
                    <Link to="/" className="navigation__item">
                        <Cart number={shopItems} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDesktop