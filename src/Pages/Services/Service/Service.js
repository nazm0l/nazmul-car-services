import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ product }) => {
  const { name, picture, price, _id } = product;
  const navigate = useNavigate();

  const buyNowDetails = (_id) => {
    navigate(`/services/${_id}`);
  };

  return (
    <div className="product">
      <img className="product-img" src={picture} alt="" />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button onClick={() => buyNowDetails(_id)} className="btn btn-dark">
        Buy Now
      </button>
    </div>
  );
};

export default Service;
