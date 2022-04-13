import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Menu.css'

const Item = styled.li`
    &:not(.header__item--active){
        color:${props => props.theme.colors.greyMenu};
    }
    &:hover{
        color:${props => props.theme.colors.white};
        cursor:pointer;
    }
`

const Menu = () => {


    return (
        <ul className="header__menu header__menu--navigation">
            <Link to="/" className="header__link">
                <Item className="header__item header__item--active">Home</Item>
            </Link>
            <Link to="/" className="header__link">
                <Item className="header__item">Nosso Menu</Item>
            </Link>
            <Link to="/" className="header__link">
                <Item className="header__item">Ofertas</Item>
            </Link>
            <Link to="/" className="header__link">
                <Item className="header__item">Sobre</Item>
            </Link>
            <Link to="/" className="header__link">
                <Item className="header__item">Franquia</Item>
            </Link>
            <Link to="/" className="header__link">
                <Item className="header__item">Contato</Item>
            </Link>
        </ul>
    )
}

export default Menu