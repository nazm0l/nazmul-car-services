import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
    }

    return (
        <div className='container w-25 mx-auto'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p className="mt-3">Already Registerd? <Link to="/login" onClick={navigateLogin} className="text-danger text-decoration-none">Login Now</Link></p>
        </div>
    );
};

export default Register;