import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';
import Booking from '../Components/Booking/Booking';
import LOgin from '../Components/Login/LOgin';
import Registration from '../Components/Registration/Registration';
import Hotels from '../Hotels/Hotels';
import PrivateRoute from '../Private/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/booking',
                element: <PrivateRoute>
                            <Booking />
                        </PrivateRoute>
            },
            {
                path: '/login',
                element: <LOgin />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/hotels',
                element: <PrivateRoute>
                            <Hotels />
                        </PrivateRoute>,
                loader: () => fetch('/hotel.json'),
            },
        ]
    }
])

export default router