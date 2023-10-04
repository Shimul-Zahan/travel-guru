import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';

export const MyContext = createContext(null);
const ContextAuth = ({ children }) => {

    const [places, setPlaces] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const cardClicked = (place) => {
        setPlaces(place)
    }

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOutUser = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log("User Now", currentUser);
        })
        return (() => {
            unSubscriber();
        })
    }, [])

    const contextElement = {
        user,
        places,
        cardClicked,
        createAccount,
        logInUser,
        googleLogIn,
        logOutUser,
    }

    return (
        <MyContext.Provider value={contextElement}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextAuth