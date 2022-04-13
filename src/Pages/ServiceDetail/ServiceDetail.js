import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {id} = useParams();

    return (
        <div>
            <h2>Service ID: {id}</h2>
        </div>
    );
};

export default ServiceDetail;