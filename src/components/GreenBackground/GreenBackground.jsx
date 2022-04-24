import React from "react";
import styled from 'styled-components';


const BackgroundBanner = styled.section`
    background: rgb(77,255,95);
    background: radial-gradient(circle, rgba(77,255,95,1) 0%, rgba(6,152,21,1) 48%, rgba(1,126,13,1) 100%);
    height: 900px;
    padding-bottom:3rem;

    @media screen and (max-width:1000px){
        height:700px;
    }
    @media screen and (max-width:660px){
        height:500px;
    }
`

const Background = styled.div`
    background: rgb(58,178,70);
    background: radial-gradient(circle, rgba(58,178,70,1) 0%, rgba(6,152,21,1) 24%, rgba(1,126,13,1) 40%);
    height: 100%;
    padding-bottom:3rem;
    padding-top:7rem;
    box-sizing:border-box;
`

const GreenBackground = ({ children, type }) => {


    return (
        type === "banner" ?
            <BackgroundBanner>
                {children}
            </BackgroundBanner> :
            <Background>
                {children}
            </Background>
    )
}

export default GreenBackground