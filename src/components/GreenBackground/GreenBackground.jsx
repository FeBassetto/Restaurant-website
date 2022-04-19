import React from "react";
import styled from 'styled-components';


const Background = styled.section`
    background: rgb(77,255,95);
    background: radial-gradient(circle, rgba(77,255,95,1) 0%, rgba(6,152,21,1) 48%, rgba(1,126,13,1) 100%);
    height: 900px;
    padding-bottom:3rem;

    @media screen and (max-width:1000px){
        height:700px;
    }
`

const GreenBackground = (props) => {


    return (
        <Background>
            {props.children}
        </Background>
    )
}

export default GreenBackground