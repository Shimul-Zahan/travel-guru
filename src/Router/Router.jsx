import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';
import Booking from '../Components/Booking/Booking';
import LOgin from '../Components/Login/LOgin';

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
                element: <Booking />
            },
            {
                path: '/login',
                element: <LOgin />
            },
            {
                path: '/registration',
                element: <Booking />
            }
        ]
    }
])

export default router