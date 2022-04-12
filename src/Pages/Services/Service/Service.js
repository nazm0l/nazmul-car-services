import React from 'react';

const Service = ({product}) => {

    const {name, picture, price} = product;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Service;