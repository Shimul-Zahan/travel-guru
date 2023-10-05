import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';

export const MyContext = createContext(null);
const ContextAuth = ({ children }) => {

    const [clickedPlaces, setClickedPlaces] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [filterPlaces, setFilterPlaces] = useState([]);
    const [data, setData] = useState([]);

    const cardClicked = (place) => {
        setClickedPlaces(place) //set kore dibo
    }

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            // console.log("User Now", currentUser);
        })
        return (() => {
            unSubscriber();
        })
    }, [])

    const bookingDta = (origin, destinition, from, to) => {
        const bookingFormData = {
            origin,
            destinition,
            from,
            to
        }
        setData(bookingFormData);
        
    }

    const contextElement = {
        user,
        clickedPlaces,
        cardClicked,
        createAccount,
        logInUser,
        googleLogIn,
        logOutUser,
        loading,
        // filterPlaces,
        bookingDta,
        data,
    }

    return (
        <MyContext.Provider value={contextElement}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextAuth