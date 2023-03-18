import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    const url = `https://nazmul-car-services-server-jrmsxoqw4-nazm0l.vercel.app/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <div>
      <h2>Service Name: {car.name}</h2>
    </div>
  );
};

export default ServiceDetail;
