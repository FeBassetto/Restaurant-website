import React from "react";
import CirclePrice from "../../CirclePrice/CirclePrice";
import './BannerContent.css'
import Button from './../../Button/Button';
import styled from 'styled-components';

const Content = styled.div`
    font-family:${props => props.theme.font.Title}
`

const BannerContent = ({ subPrice, title, discount, discountText, discountTitle, buttonText }) => {


    return (
        <Content className="content">
            <p className="subPrice">{subPrice}</p>
            <p className="title" >{title}</p>
            <CirclePrice
                color="yellow"
                text={discountText}
                number={discount}
                type="discount" />
            <p className="discountTitle">{discountTitle}</p>
            <div className="buttonPrice">
                <Button
                    text={buttonText}
                    type="discount"
                />
            </div>
        </Content>
    )
}

export default BannerContent