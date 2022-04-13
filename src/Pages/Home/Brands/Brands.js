import React from "react";
import "./Brands.css";
import lambo from "../../../Images/brand/lambo.png";
import ferrari from "../../../Images/brand/ferrari.png";
import bmw from "../../../Images/brand/bmw.png";
import bugatti from "../../../Images/brand/bugatti.png";
import mclaren from "../../../Images/brand/mclaren.png";
import Brand from "../Brand/Brand";

const Brands = () => {
  const brands = [
    { id: 1, name: "Lamborgini", img: lambo },
    { id: 2, name: "Ferrari", img: ferrari },
    { id: 3, name: "BMW", img: bmw },
    { id: 4, name: "Bugatti", img: bugatti },
    { id: 5, name: "McLaren", img: mclaren },
  ];

  return (
    <div>
      <h2 className="brand-title">Our Partner</h2>
      <div className="brands-container">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
