import React from "react";
import './DealDay.css'
import styled from 'styled-components';
import Button from "../../Button/Button";
import CirclePrice from "../../CirclePrice/CirclePrice";

const Deals = styled.div`
    color: ${props => props.theme.colors.white};
    font-family:${props => props.theme.font.Title};
`

const Title = styled.h1`
    font-size:4rem;
    line-height: 5rem;

    @media screen and (max-width:1325px){
        &&{
            font-size:3.5rem;
        }
    }
    @media screen and (max-width:1225px){
        &&{
            font-size:3rem;
        }
    }
`


const DealDay = ({
    type,
    background,
    title,
    subTitle,
    buttonText,
    circleColor,
    circleNumber,
    circleText,
}) => {

    return (
        <Deals
            className={`deals ${type} ${type}--${background}`}>
            <CirclePrice
                color={circleColor}
                number={circleNumber}
                text={circleText}
                type="price"
            />
            <h2 className={`sub sub--${type}`}>
                {subTitle}
            </h2>
            <Title>
                {title}
            </Title>
            <Button
                text={buttonText}
                type="product" />
        </Deals>
    )
}

export default DealDay