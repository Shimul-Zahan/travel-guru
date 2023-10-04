import React from 'react'
import logo from '../../../public/travel-guru-resources/logo.png'
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavbarWithBlackText = () => {
    return (
        <div className='container mx-auto text-lg font-medium '>
            <div className='flex justify-between items-center py-8'>
                <img src={logo} alt="" className='w-40 h-14' />
                <div className='w-80'></div>
                <div className='flex justify-between items-center gap-20 text-black'>
                    <Link to='/'>Home</Link>
                    <Link>Destination</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
                <Link to='/login'>
                    <button className='bg-yellow-500 btn px-10 capitalize font-normal text-lg text-black'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default NavbarWithBlackText