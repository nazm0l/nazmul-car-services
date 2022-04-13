import React from 'react';
import './Service.css'

const Service = ({product}) => {

    const {name, picture, price} = product;

    return (
        <div className='product'>
            <img className='product-img' src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button className='btn btn-dark'>Buy Now</button>
        </div>
    );
};

export default Service;