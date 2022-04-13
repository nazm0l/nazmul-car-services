import React from 'react';
import './Brand.css'

const Brand = ({brand}) => {

    const {name, img} = brand;

    return (
        <div className='brand-container'>
            <img className='brand-img' src={img} alt="" />
        </div>
    );
};

export default Brand;