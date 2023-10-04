import React from 'react'
// BsArrowRight
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen w-full absolute bg-cover bg-blend-overlay bg-black top-0 -z-10 bg-opacity-70 grid grid-cols-1 md:grid-cols-4 justify-center items-center'
                style={{
                    backgroundImage: 'url("./travel-guru-resources/images/Rectangle 1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                <div className='flex col-span-2 relative justify-center items-start md:min-h-screen pl-[190px] flex-col text-white space-y-5'>
                    <div className='space-y-5'>
                        <h1 className="text-7xl font-bold">COX'S BAZAR</h1>
                        <p className='w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam aut error soluta nulla maxime est, alias architecto illo aspernatur optio? Doloremque eveniet assumenda repellendus quam molestiae quibusdam! Aliquid, ab?</p>
                    </div>
                    <Link to='/booking'>
                        <button className='btn bg-yellow-500 capitalize px-10'>Booking <span className='font-bold text-xl'><BsArrowRight /></span></button>
                    </Link>
                </div>

                <div className=' col-span-2'>
                    <div className="carousel carousel-center rounded-box space-x-5">
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <Link to='/hotels'>
                                <img src="/travel-guru-resources/images/Rectangle 1.png" alt="Pizza" className='h-full w-64 rounded-xl opacity-50' />
                            </Link>
                            <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">COX'S BAZAR</h1>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <img src="/travel-guru-resources/images/Sreemongol.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                            <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SREEMANGAL</h1>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <img src="/travel-guru-resources/images/sundorbon.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                            <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SUNDARBANS</h1>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <img src="/travel-guru-resources/images/Sajek.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                            <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SAJEK</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home