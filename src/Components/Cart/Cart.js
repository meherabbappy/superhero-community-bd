import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.persons)
    const {name,age,income,content,nationality,img} = props.persons
    return (
        <div className = 'cart-section'>
            <img className = 'cart-img' src={img} alt="" />
            <p>Name: {name}</p>
            <p>Country: {nationality}</p>
            <p>Content: {content}</p>
            <p>Income: {income}</p>
            <p>Age: {age}</p>
            <div>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
                </div>
            <button onClick = {() => props.handleAddCart(props.persons)} 
            
            className='btn-click'>
                
                <i class="fas fa-shopping-cart"></i> Add Favourite </button>
                

        </div>
    );
};

export default Cart;