import { useEffect, useState } from "react";

const useCars = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://nazmul-car-services-server-jrmsxoqw4-nazm0l.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default useCars;
