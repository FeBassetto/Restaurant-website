import React from 'react'
import './Ingredients.css'
import BackgroundIngredients from './BackgroundIngredients/BackgroundIngredients';
import styled from 'styled-components';
import HeaderSection from '../HeaderSection/HeaderSection';

const IngredientsSection = styled.section`
    background-color:${props => props.theme.colors.green};
`

const Ingredients = () => {


    return(
        <IngredientsSection className='Ingredients'>
            <HeaderSection
                title="Ingredientes"
                sub="Feito com Ingredients Naturais"
                background="green"
            />
            <BackgroundIngredients/>
        </IngredientsSection>
    )
}

export default Ingredients