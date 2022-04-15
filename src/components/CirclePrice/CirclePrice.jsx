import React from "react";
import styled from 'styled-components';
import './CirclePrice.css'

const Circle = styled.div`
    font-family:${props => props.theme.font.Title}
`

const CirclePrice = ({ text, number, color, type }) => {


    return (
        <Circle className={`circle circle--${color} circle--${type}`}> 
            <p className={`circle__text`}>{text}</p>
            <p className={`circle__price`}>{number}</p>
        </Circle>
    )
}

export default CirclePrice