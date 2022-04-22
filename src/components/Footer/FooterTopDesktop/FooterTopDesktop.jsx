import React from "react";
import './FooterTopDesktop.css'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const FooterTopDesktop = () => {



    return (
        <div className="footerTop">
            <div className="footerTop__navigation">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/">Nosso menu</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/">Ofertas</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/">Sobre</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/">Franquia</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footerTop__icons">
                <div className="icons">
                    <div className="icons__icon">
                        <FaTwitter />
                    </div>
                    <div className="icons__icon">
                        <FaFacebookF />
                    </div>
                    <div className="icons__icon">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTopDesktop