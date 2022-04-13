import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div className='container'>
            <h2 className='product-title my-5'>Our Cars</h2>
            <div className='product-container'>
            {
                products.map(product => <Service key={product._id} product={product}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;