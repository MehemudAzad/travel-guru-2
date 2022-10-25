import React, { useContext, useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError, setLoading] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {providerLogin, signIn} = useContext(AuthContext);

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>console.error(error))
        toast.success('successfully logged in')
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email= form.email.value;
        console.log(email, password);

      

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            //if user is present(loged in) navigate to the route
            if(user.emailVerified){
                navigate(from, {replace: true});
                toast.success('Successfully sign in!');
            }else{
                //if user is not logged in display that the user is not logged in via a toast
                toast.error('Your email is not verified. Please verify your email address.')
            }
        })
        .catch(error =>{
            console.error(error)
            setError(error.message);
        })
        .finally(() =>{
            setLoading(false);
        })
    }



    return (
        <form onSubmit={handleSubmit} className='pt-24 text-center'>
            <div className='mt-20 border-2 w-[500px] mx-auto rounded-md'>
                <h1 className='text-4xl my-4 mt-10'>Login</h1>
                <input type="email" name='email' placeholder="Username or Email" className="input w-full max-w-md my-4" required/><br></br>
                <input type="password" name='password' placeholder="password" className="input w-full max-w-md" required/>
                <div className='flex mx-auto items-center justify-around mt-4'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    
                    <span className="label-text">Remember me</span> 
                </label>
            </div>
            <div className='text-yellow-500 link'>
               <Link>Forgot password</Link> 
            </div>
            </div>
            <button className='bg-yellow-500 px-48 py-3 my-6 rounded-md'>Login</button>
            <h3 className='mb-10'>
                don't have an account? <Link to='/register'><span className='text-yellow-500 link'>Create an account</span> </Link>
            </h3>
            </div>
     
           <div className="grid grid-cols-1 gap-2 mx-auto my-4 w-[350px]">
            <button onClick={handleGoogleSignIn} className='bg-base-200 flex items-center rounded-2xl p-2'>
                <FaGoogle></FaGoogle>
                <p className='ml-20'>Continue with Google</p> 
            </button>
            <button onClick={handleGithubSignIn} className='bg-base-200 flex items-center rounded-2xl p-2' >
                <FaGithub></FaGithub>
                <p className='ml-20'>Continue with Github</p>
            </button>
          </div>
              <div className='text-rose-500 font-semibold'>
                {error}
              </div>
        </form>
    );
};

export default Login;