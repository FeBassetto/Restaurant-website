import React from "react";
import styled from 'styled-components';

const BoxNotFound = styled.section`
    height:80vh;
    background-color:#017E0D;
    
    display:flex;
    align-items:center;
    justify-content:center;
`

const PageNotFoundText = styled.p`
    font-size:4vw;
    color:#C4C4C4;
    font-family:RobotoBold;
`

const Page404 = () => {



    return(
        <BoxNotFound>
            <PageNotFoundText>Página não encontrada</PageNotFoundText>
        </BoxNotFound>
    )
}

export default Page404