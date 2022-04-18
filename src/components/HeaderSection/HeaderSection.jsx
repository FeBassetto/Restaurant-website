import React from "react";
import styled from 'styled-components';
import './HeaderSection.css'

const Head = styled.div`
    padding:5rem;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const Title = styled.h1`
    font-family:${props => props.theme.font.SubTitle};
    font-size:4rem;
`

const Sub = styled.h2`
    font-family:${props => props.theme.font.SubTitle};
    font-size:6rem;
    width:70%;
`

const HeaderSection = ({ title, sub, background }) => {


    return (
        <Head>
            <Title className={`title--${background}`}>
                {title}
            </Title>
            <Sub className={`sub--${background}`}>
                {sub}
            </Sub>
        </Head>
    )
}

export default HeaderSection