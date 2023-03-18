import React from "react";
import useCars from "../../hooks/useCars";

const ManageCars = () => {
  const [products, setProducts] = useCars();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://nazmul-car-services-server-jrmsxoqw4-nazm0l.vercel.app/cars/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Manage Cars</h2>
      {products.map((product) => (
        <div key={product._id}>
          {" "}
          <h5>
            {product.name}{" "}
            <button
              onClick={() => handleDelete(product._id)}
              className="btn btn-danger ms-5"
            >
              x
            </button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageCars;
