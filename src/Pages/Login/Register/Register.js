import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
      return <Loading></Loading>
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name});
    navigate("/");
  };

  return (
    <div className="container w-25 mx-auto">
      <h2 className="text-center fw-bold mt-5">Register Now</h2>
      <form onSubmit={handleRegister}>
        <input
          className="mt-2 w-100 py-2"
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
        />
        <br />
        <input
          className="mt-2 w-50 w-100 py-2"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
        <br />
        <input
          className="mt-2 w-50 w-100 py-2"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input
          onClick={() => setAgree(!agree)}
          className="mt-3"
          type="checkbox"
          name="terms"
          id=""
        />
        <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">
          Terms and Conditions
        </label>
        <br />
        <input className={`btn btn-dark mt-2 ${agree? 'd-block' : 'disabled'}`} type="submit" value="Register" />
      </form>
      <p className="mt-3">
        Already Registered?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-danger text-decoration-none"
        >
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default Register;
