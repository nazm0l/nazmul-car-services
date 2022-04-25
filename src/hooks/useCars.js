import { useEffect, useState } from "react";

const useCars = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return[products, setProducts]
}

export default useCars;