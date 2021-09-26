import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.persons)
    const {name,age,income,content,nationality,img} = props.persons
    return (
        <div className = 'cart-section'>
            <img className = 'cart-img' src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>Country: {nationality}</h4>
            <h4>Content: {content}</h4>
            <h4>Age: {age}</h4>
            <h4>Income: {income}</h4>
            <button onClick = {() => props.handleAddCart(props.persons)} 
            className='btn-click'>
                <i class="fas fa-shopping-cart"></i> Favourite Youtuber</button>

        </div>
    );
};

export default Cart;