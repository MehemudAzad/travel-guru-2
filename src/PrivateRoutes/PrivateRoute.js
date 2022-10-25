import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);//AuthContext is the function and useContext is what we use call from react
    const location = useLocation();


    //i still don't know the exact reason for this but We want to increase the user experience so while the user waits we want to give a loading... or a spinner
    if(loading){
        return <PropagateLoader color="#36d7b7" />
    } 

    //if the user doesn't exist then we are sending him to the login page using the navigate function
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;