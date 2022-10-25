
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../config/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


// const googleprovider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState(true);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    const signinWithGoogle = () => {
        return signInWithPopup (auth, GoogleAuthProvider)
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setloading(false);
        })

        return () =>{
            unsubscribe();
        }

    },[])
    // const authInfo = {user, loading, createUser, signIn, logout, signinWithGoogle}
    const authInfo = {user, loading, createUser, signIn, logout, signinWithGoogle}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;