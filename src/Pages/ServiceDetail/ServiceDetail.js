import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {id} = useParams();

    const [car, setCar] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/cars/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCar(data));
    },[])

    return (
        <div>
            <h2>Service Name: {car.name}</h2>
        </div>
    );
};

export default ServiceDetail;