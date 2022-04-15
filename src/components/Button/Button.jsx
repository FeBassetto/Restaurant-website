import React from "react";
import styled from 'styled-components';
import './Button.css'

const StyledButton = styled.button`
    color:${props => props.theme.colors.lightYellow};
    background-color:${props => props.theme.colors.white};
    font-family:${props => props.theme.font.Title};

    &&:hover{
        background-color:${props => props.theme.colors.lightYellow};
        color:${props => props.theme.colors.white};
        cursor:pointer;
    }
    &&:active{
        box-shadow: 0px 2px 2px 0px #ffffffff; 
        transition:0s; 
    }

`

const Button = ({ text, type }) => {



    return (
        <StyledButton className={`button button--${type}`}>
            {text}
        </StyledButton>
    )
}

export default Button