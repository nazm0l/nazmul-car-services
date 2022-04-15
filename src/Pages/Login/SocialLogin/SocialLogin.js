import React from 'react';
import auth from "../../../firebase.init";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || errorGit) {
        errorElement = <p className='text-danger'>Error: {error?.message} {errorGit.message}</p>
      }

      if(user || userGit){
          navigate('/');
      }

    return (
        <div className='container'>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark px-3 d-block mx-auto'>SignIn with Google</button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark mt-2 px-3 d-block mx-auto'>SignIn with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;