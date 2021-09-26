import React from 'react';
import './CartNameList.css'

const CartNameList = (props) => {
    const {name} = props.persons;
    return (
        <div>
            <h1 className = 'list-name'>{name}</h1>
        </div>
    );
};

export default CartNameList;