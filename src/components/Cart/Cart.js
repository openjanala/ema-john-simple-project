import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let total = 0 ;
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    
    let shipping =0;
    if(total > 50){
        shipping = 0;
    }else if(total > 15){
        shipping = 5;
    }else if(total > 0){
        shipping = 12;
    }

    const tax = total / 9;

    const formatNumber = num =>{
        const precision =num.toFixed(2);
        return Number(precision); 
    }

   
    return (
        <div>
            <h4>Order Summary</h4>
             <p>Items Ordered: {cart.length}</p>
             <p>Product Price: {formatNumber(total)}</p>
             <p>Tax : {formatNumber(tax)}</p>
             <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
           <p>Total Price: {formatNumber(total + shipping + tax)}</p>
        </div>
    );
}
;

export default Cart;