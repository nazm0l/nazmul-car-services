import { useEffect, useState } from "react";

const useCars = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://vast-temple-70265.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return[products, setProducts]
}

export default useCars;