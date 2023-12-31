import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    // console.log(location);

    const { user, loading } = useContext(MyContext);
    if (loading) {
        return console.log('Loading')
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoute