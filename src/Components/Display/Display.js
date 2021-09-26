import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartNameList from '../CartName/CartNameList';
import CartTotal from '../CartTotal/CartTotal';
import './Display.css';

const Display = () => {

        const [person,setPerson] = useState([]);
        const [carts,setCarts] = useState([]);

        useEffect(() =>{
            fetch('./persons.JSON')
            .then(res =>res.json())
            .then(data =>setPerson(data));
        },[]);

        const handleAddCart = (persons) =>{
            const newCart = [...carts,persons];
            setCarts(newCart);
        }

    return (
        <div className = 'display-container'>
            <div className="person-container">
            
                {
                    person.map(persons => <Cart
                        key ={persons.name}
                        handleAddCart = {handleAddCart}
                        persons = {persons}></Cart>)
                }
            </div>
            <div>
                <div className="carts-container">
                <CartTotal carts = {carts}></CartTotal>
                <div>
                {
                        carts.map(persons => <CartNameList
                            key ={persons.content}
                            persons = {persons}></CartNameList>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Display;