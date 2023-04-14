import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
                <h2>Selected items: {props.cart.length}</h2>
        </div>
    );
};

export default Cart;