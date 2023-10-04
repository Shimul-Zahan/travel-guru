import React, { useContext } from 'react'
import NavbarWithBlackText from '../Navbar/NavbarWithBlackText'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { MyContext } from '../../Context/ContextAuth';

const LOgin = () => {

    const { logInUser, googleLogIn } = useContext(MyContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password).then(res => {
            // console.log(res.user)
        }).catch(err => {
            console.log(err)
        })
    }

    const googleSignIn = () => {
        googleLogIn().then(res => {
            // console.log(res.user);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='container mx-auto'>
            <NavbarWithBlackText />
            <div className='w-full mb-10 flex justify-center items-center'>
                <form onSubmit={handleLogin}>
                    <div className=' w-[650px] bg-base-100 rounded-lg p-8 space-y-6 border-2'>
                        <h1 className="text-xl font-bold mb-12">Login</h1>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input name='email' type='email' required
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Username or Email</span>
                            </label>
                        </div>

                        <div class="relative h-11 w-full min-w-[200px]">
                            <input name='password' type='password' required
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Password</span>
                            </label>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='space-y-2'>
                                <input type="checkbox" name='destination' placeholder="Your visiting place here..." className="" />
                                <span className='ml-2 text-lg'>Remember Me</span>
                            </div>
                            <div>
                                <h1 className="text-lg text-yellow-500 underline">Forgot Password</h1>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <input type="submit" value="Login" className="input cursor-pointer pl-8 font-bold bg-yellow-500 text-xl border-none h-16 input-bordered w-full" />
                        </div>
                        <div className='text-center'>
                            <p className="text-lg">New to our site?
                                <Link to='/register'>
                                    <span className='text-lg text-yellow-500 underline'> Registrer </span>
                                </Link>now.</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center flex-col mb-8 relative'>
                <hr className='w-96 bg-black h-[2px]' />
                <p className='text-lg absolute -top-4 bg-white px-4'>Or</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center relative w-96 cursor-pointer'>
                    <BsFacebook className='absolute left-2 text-3xl top-2 text-blue-500' />
                    <button className='text-center cursor-pointer font-medium text-lg input input-bordered rounded-full w-96'>Continue with Facebook</button>
                </div>
                <div onClick={googleSignIn} className='text-center mt-4 relative w-96 cursor-pointer'>
                    <AiFillGoogleCircle className='absolute left-2 top-2 text-3xl' />
                    <button className='text-center cursor-pointer font-medium text-lg input input-bordered rounded-full w-96'>Continue with Google</button>
                </div>
            </div>
        </div>
    )
}

export default LOgin