import React, { useEffect, useState } from 'react';
import './Shoes.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shoes = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shoe-container'>
            <div className='product-container'>
                {products.map(product => <Products
                key = {product.id} 
                product ={product}
                addToCart ={addToCart}
                ></Products>)}
            </div>
            <div className='order-summary'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shoes;