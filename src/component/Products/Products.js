import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    // console.log(props.product)
    const {name, img, seller, ratings, price} = props.product
    
    return (
        <div className='product-details'>
            <img src={img} alt="" />
               <div className='details'>
               <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} Star</p>
                </div>
                <button onClick={()=>props.addToCart(props.product)} className='button-style'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>   
        </div>
    );
};

export default Products;