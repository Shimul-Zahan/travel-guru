import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextAuth'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(MyContext);
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}

export default PrivateRoute