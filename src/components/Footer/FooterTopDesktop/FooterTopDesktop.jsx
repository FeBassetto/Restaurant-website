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
                            <Link to="/nossomenu">Nosso menu</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/ofertas">Ofertas</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/franquia">Franquia</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contato">Contato</Link>
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