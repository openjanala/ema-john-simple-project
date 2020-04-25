import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviwitem from '../Reviwitem/Reviwitem';

const Review = () => {
    const [cart, setCart] =useState([]);
   
    useEffect(()=>{
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
       
        const cartProduct = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        },[]);
      // console.log(cartProduct);
      setCart(cartProduct);

    })
    return (
        <div>
            <h1>Cart Items:{cart.length}</h1>
            {
                cart.map(pd => <Reviwitem product={pd}></Reviwitem> )
            }
        </div>
    );
};

export default Review;