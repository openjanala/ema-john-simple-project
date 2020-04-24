import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,5);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
       const newCart =[...cart, product];
       setCart(newCart);
       const sameProduct = newCart.filter(pd => pd.key === product.key );
      const count = sameProduct.length;
       addToDatabaseCart(product.key, count);
    }
 
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    <h3>{products.length}</h3>
                        {
                            products.map(pd => 
                                <Product 
                                key = {pd.key}
                            showAddToCart= {true}
                                    handleAddProduct = {handleAddProduct}
                                    product={pd}>
                                </Product>)
                        }
                </ul>
            </div>
            <div className="card-container" >
               <Cart cart={cart}></Cart>
                
            </div>
           
        </div>
    );
};

export default Shop;