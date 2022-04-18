import React from "react";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import './User.css'
import { AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'


const Item = styled.div`
    color:${props => props.theme.colors.greyMenu};
    display:flex;
    align-items:center;

    &:hover{
        color:${props => props.theme.colors.white};
        cursor:pointer;
    }
`

const User = ({ user, shopItems, logged }) => {


    return (
        <ul className="header__user">
            <li>
                <Link to="/" className="header__link" >
                    <Item>
                        <AiOutlineUser size={30} />
                        {logged ? user : "Cadastre-se"}
                    </Item>
                </Link>
            </li>
            <li>
                <Link to="/" className="header__link" >
                    <IconButton aria-label="cart">
                        <Item>
                            <Badge badgeContent={shopItems}
                                color="secondary"
                                overlap="rectangular">
                                <ShoppingCartIcon />
                            </Badge>
                        </Item>
                    </IconButton>
                </Link>
            </li>
        </ul>
    )
}

export default User