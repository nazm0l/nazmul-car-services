import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div>
            <h2>Services: {products.length}</h2>
            {
                products.map(product => <Service key={product._id} product={product}></Service>)
            }
        </div>
    );
};

export default Services;