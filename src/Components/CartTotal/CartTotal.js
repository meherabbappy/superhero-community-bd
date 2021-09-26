import React from 'react';
import './CartTotal.css'

const CartTotal = (props) => {
    const {carts}  =props;
    let total = 0;
    for(const amount of carts){
        total = total + amount.income;
    }
    return (
        <div className = 'cart-total'>
             <h3 className = 'name1'><i class="fas fa-shopping-cart"></i> Total Added: {props.carts.length}</h3>
            <h3 className = 'name1'><i class="fas fa-money-check-alt"></i> Income status: {total} </h3>
        </div>
    );
};

export default CartTotal;