import React from "react";
import { Link } from "react-router-dom";
import './FooterTopMobile.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const FooterTopMobile = () => {


    return (
        <div className="FooterTopMobile">
            <nav className="navMobile">
                <ul className="navMobile__list">
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Home</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Nosso Menu</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Ofertas</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Sobre</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Franquia</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                    <li className="navMobile__item">
                        <Link to="/" className="navMobile__link">
                            <p>Contato</p>
                            <AiOutlineArrowRight />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FooterTopMobile