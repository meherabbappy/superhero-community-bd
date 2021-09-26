import React from 'react';
import './CartNameList.css'

const CartNameList = (props) => {
    const {name,img} = props.persons;
    return (
        <div className = 'list-cart'>
            <div class="card mb-3">
                <div class="row g-0">
                <div class="col-md-4">
                    <img className = 'cart-img' src={img} alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="cart-name">{name}</h5>
                    
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default CartNameList;