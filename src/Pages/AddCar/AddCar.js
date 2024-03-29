import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddCar = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const url = `https://nazmul-car-services-server-jrmsxoqw4-nazm0l.vercel.app/cars`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    toast("New Car Added");
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Add a Car</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          {...register("picture", { required: true })}
          placeholder="Photo Url"
        />
        <input
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
          className="mb-2"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <input className="btn btn-dark" type="submit" value="Add Car" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCar;
