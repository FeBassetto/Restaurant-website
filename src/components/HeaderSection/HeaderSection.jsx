import React from "react";
import styled from 'styled-components';
import './HeaderSection.css'

const Head = styled.div`
    padding:5rem;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;

    @media screen and (max-width:780px){
        padding: 5rem 0rem;
    }
`

const Title = styled.h1`
    font-family:${props => props.theme.font.SubTitle};
    font-size:4rem;

    @media screen and (max-width:1500px){
        font-size:3rem;
    }
    @media screen and (max-width:1000px){
        font-size:1.5rem;
    }
    @media screen and (max-width:525px){
        font-size:1rem;
    }
`

const Sub = styled.h2`
    font-family:${props => props.theme.font.SubTitle};
    font-size:6rem;
    width:70%;

    @media screen and (max-width:1550px){
        font-size:5.5rem;
    }
    @media screen and (max-width:1450px){
        font-size:5rem;
    }
    @media screen and (max-width:1300px){
        font-size:4.5rem;
    }

    @media screen and (max-width:1200px){
        font-size:4rem;
    }
    @media screen and (max-width:1100px){
        font-size:3.5rem;
    }
    @media screen and (max-width:1000px){
        font-size:3rem;
    }
    @media screen and (max-width:525px){
        font-size:2.5rem;
    }
    @media screen and (max-width:450px){
        font-size:2rem;
    }
    @media screen and (max-width:430px){
        font-size:1.75rem;
    }
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