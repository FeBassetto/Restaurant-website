import React from "react";
import { MdShoppingCart } from 'react-icons/md';
import './Cart.css'

const Cart = ({number}) => {



    return(
        <div className="cart">
            <div className="number__cart">
                {number ? number: 0}
            </div>
            <MdShoppingCart />
        </div>
    )
}

export default Cart