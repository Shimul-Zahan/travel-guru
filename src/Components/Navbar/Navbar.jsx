import React, { useContext } from 'react'
import logo from '../../../public/travel-guru-resources/logo.png'
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/ContextAuth';

export const Navbar = () => {

    const { user, logOutUser } = useContext(MyContext);

    const logOut = () => {
        logOutUser().then(res => {
            console.log('Successfully Logout')
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='container mx-auto text-lg font-medium '>
            <div className='flex justify-between items-center py-8'>
                <img src={logo} alt="" className='w-40 h-14' />
                <div className='relative'>
                    <BsSearch className='absolute bottom-3 left-3 text-white' />
                    <input type="text" placeholder="Type here" className="input h-11 text-lg placeholder:text-white text-white border-white bg-transparent pl-10 input-bordered input-sm w-[350px] max-w-xs" />
                </div>
                <div className='flex justify-between items-center gap-20 text-white'>
                    <Link to='/'>Home</Link>
                    <Link>Destination</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                    {
                        user && <button className="btn btn-outline text-white">{user.displayName}</button>
                    }
                </div>
                {
                    user ? <button onClick={logOut} className='bg-yellow-500 btn px-10 capitalize font-normal text-lg text-black'>Logout</button> :
                        <Link to='/login'>
                        <button className='bg-yellow-500 btn px-10 capitalize font-normal text-lg text-black'>Login</button>
                    </Link> 
                }
            </div>
        </div>
    )
}
