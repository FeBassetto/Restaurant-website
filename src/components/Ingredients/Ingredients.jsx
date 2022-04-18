import React from 'react'
import './Ingredients.css'
import HeaderIngredients from './HeaderIngredients/HeaderIngredients';
import BackgroundIngredients from './BackgroundIngredients/BackgroundIngredients';
import styled from 'styled-components';

const IngredientsSection = styled.section`
    background-color:${props => props.theme.colors.green};
`

const Ingredients = () => {


    return(
        <IngredientsSection className='Ingredients'>
            <HeaderIngredients
                title="Ingredientes"
                sub="Feito com Ingredients Naturais"
            />
            <BackgroundIngredients/>
        </IngredientsSection>
    )
}

export default Ingredients