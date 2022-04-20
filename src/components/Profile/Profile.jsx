import React from "react";
import './Profile.css'
import styled from 'styled-components';


const Username = styled.p`
    font-family: ${props => props.theme.font.SecondText};
    color: ${props => props.theme.colors.darkGreyBorder};
    font-size: 1.5rem;
`

const Reviews = styled.p`
    font-family: ${props => props.theme.font.SecondLightText};
    color: ${props => props.theme.colors.darkGreyBorder};
    font-size: 1.25rem;
`

const Profile = ({img, userName, reviews}) => {
    

    return(
        <div className="profile">
            <img src={img} alt={userName} 
                className="profile__image"
            />
            <div className="profile__infos">
                <Username className="profile__userName">{userName}</Username>
                <Reviews className="profile__reviews">{reviews} Reviews</Reviews>
            </div>
        </div>
    )
}

export default Profile