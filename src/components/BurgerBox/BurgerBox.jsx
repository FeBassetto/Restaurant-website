import React from "react";
import './BurgerBox.css'
import styled from 'styled-components';
import {MdOutlineAddCircle} from 'react-icons/md'

const Title = styled.h1`
    font-family:${props => props.theme.font.Text};
    font-size:3rem;

    @media screen and (max-width:400px){
        font-size:2rem;
    }
    `

const Price = styled.h2`
    color:${props => props.theme.colors.red};
    font-family:${props => props.theme.font.Title};
    font-size:1.5rem;

    @media screen and (max-width:400px){
        font-size:1rem;
    }
    `

const Text = styled.h3`
    font-family:${props => props.theme.font.Text};
    font-size:1.25rem;
    padding: 0 2rem;
    box-sizing:border-box;

    @media screen and (max-width:400px){
        font-size:.8em;
    }
    `

const BurgerBox = ({ url, title, price, text }) => {

    return (
        <div className="box">
            <img src={url} alt={title} className="box__image" />
            <div className="box__content">
            <div className="image__shadow"></div>
                <Title>
                    {title}
                </Title>
                <Price>
                    {price}
                </Price>
                <Text>
                    {text}
                </Text>
                <MdOutlineAddCircle
                    className="addCircle"
                />
            </div>
        </div>
    )
}

export default BurgerBox