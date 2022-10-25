import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

//creating the Context hook
export const AuthContext = createContext();
const auth = getAuth(app);//calling the auth , we need the auth in almost every thing

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    //create a new account with google
    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //create a new account using email and password
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in to your new account with email and password
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update your already existing password
    const updateUserProfile =  (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    //make sure that the user can not put any invalid email address or email of someone else
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }
    //logout the user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update the user put it inside unsubscribe variable
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
            console.log('user inside state change', currentUser);

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        
        }));
 
        return ()=>{
            unsubscribe();
        } 
    },[])


    //here we are sending the authinfo, it's like a packet of information in the return part of the function AuthProvider we use <AuthContext.Provider> tag to wrap up the children inside of it.
    //we pass a value as parameter and in the value we send the authInfo. We can name it anything  but here for simplicity we are naming it authInfo
    const authInfo = {user, providerLogin, logOut, createUser, signIn, updateUserProfile, verifyEmail, setLoading};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
