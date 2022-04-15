import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }

    if(user){
        navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-25 mx-auto'>
            <h2 className='text-center fw-bold mt-5'>Register Now</h2>
            <form onSubmit={handleRegister}>
                <input className='mt-2 w-100 py-2' type="text" name="name" id="" placeholder='Your Name'/>
                <br />
                <input className='mt-2 w-50 w-100 py-2' type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input className='mt-2 w-50 w-100 py-2' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input className='mt-3' type="checkbox" name="terms" id="" />
                <label className='ms-2' htmlFor="terms">Terms and Conditions</label>
                <br />
                <input className='btn btn-dark mt-2' type="submit" value="Register" />
            </form>
            <p className="mt-3">Already Registerd? <Link to="/login" onClick={navigateLogin} className="text-danger text-decoration-none">Login Here</Link></p>
        </div>
    );
};

export default Register;