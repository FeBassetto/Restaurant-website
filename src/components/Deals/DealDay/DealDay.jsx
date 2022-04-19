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
    @media screen and (max-width:900px){
        &&{
            font-size:2.5rem;
        }
    }
    @media screen and (max-width:800px){
        &&{
            font-size:2.25rem;
        }
    }
    @media screen and (max-width:725px){
        &&{
            text-align:center;
            font-size:3.25rem;
        }
    }Pheader
    @media screen and (max-width:570px){
        &&{
            font-size:2.5rem;
        }
    }
    @media screen and (max-width:475px){
        &&{
            font-size:2rem;
        }
    }
    @media screen and (max-width:420px){
        &&{
            font-size:1.75rem;
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