import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const {createUser,updateUserProfile, verifyEmail} = useContext(AuthContext);
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        const handleEmailVerification = () =>{
            verifyEmail()
            .then(()=>{})
            .catch(error => console.error(error));
        }
        // const handleUpdateUserProfile  = (name, photoURL) =>{
        //     const profile = {
        //         displayName: name,
        //         photoURL: photoURL
        //     }
        //     updateUserProfile(profile)
        //      .then(()=>{})
        //      .catch(error => console.error(error));
        // }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            // handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('please verify your email address.');
        })
        .catch(error => console.error(error));
       
    }

    return (
        <form onSubmit={handleSubmit} className='pt-12 text-center'>
            <div className='mt-20 border-2 w-[550px] mx-auto rounded-md'>
                <h1 className='text-4xl my-2 mt-8'>Create an account</h1>
                <input type="text" name='name' placeholder="First Name" className="input w-full max-w-md my-1" required/><br></br>
                <input type="text" name='lastname' placeholder="Last Name" className="input w-full max-w-md my-1" required/><br></br>
                <input type="email" name='email' placeholder="Username or Email" className="input w-full max-w-md my-1" required/><br></br>
                <input type="password" name='password' placeholder="password" className="input w-full max-w-md my-1" required/><br></br>
                <input type="password" placeholder="confirm password" className="input w-full max-w-md" required/>
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
            <button  className='bg-yellow-500 px-40 py-3 my-6 rounded-md'>Create an account</button>
                
            {/*printing the error */}
            <div className='text-rose-500 font-semibold'>
                {error}
            </div>

            <h3 className='mb-10'>
                Already have an account? <Link to='/login'><span className='text-yellow-500 link'>Log in</span> </Link>
            </h3>
            </div>
          
           <div className="grid grid-cols-1 gap-2 mx-auto my-3 w-[350px]">
            <div className='bg-base-200 flex items-center rounded-2xl p-2'>
                <FaGoogle></FaGoogle>
                <p className='ml-20'>Continue with Google</p> 
            </div>
            <div className='bg-base-200 flex items-center rounded-2xl p-2' >
                <FaGithub></FaGithub>
                <p className='ml-20'>Continue with Github</p>
            </div>
          </div>
        </form>
    );
};

export default Register;