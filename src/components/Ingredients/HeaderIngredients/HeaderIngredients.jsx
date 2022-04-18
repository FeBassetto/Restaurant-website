import React from "react";
import './HeaderIngredients.css'
import styled from 'styled-components';

const Head = styled.div`
    background-color:${props => props.theme.colors.green};
    padding:5rem;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const Title = styled.h1`
    color:${props => props.theme.colors.darkYellow};
    font-family: ${props => props.theme.font.Title};
    font-size:4rem;
`

const Sub = styled.h2`
    color:${props => props.theme.colors.white};
    font-family:${props => props.theme.font.SubTitle};
    font-size:6rem;
    width:70%;
`

const HeaderIngredients = ({title,sub}) => {


    return(
        <Head>
            <Title>
                {title}
            </Title>
            <Sub>
                {sub}
            </Sub>
        </Head>
    )
}

export default HeaderIngredients