import React, { useContext } from 'react'
// BsArrowRight
import { BsArrowRight } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { MyContext } from '../../Context/ContextAuth';


const Home = () => {
    // backgroundImage: `url(${imageUrl})`,
    const { cardClicked, clickedPlaces } = useContext(MyContext);
    const places = useLoaderData();
    const showPlaces = places.filter(item => item.place == clickedPlaces);

    const style = clickedPlaces
        ? {
            backgroundImage: `url(${showPlaces[0]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
        :
        {
            backgroundImage: `url(${places[0]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

    return (
        <div>
            <Navbar />
            <div className='min-h-screen w-full absolute bg-cover bg-blend-overlay bg-black top-0 -z-10 bg-opacity-70 grid grid-cols-1 md:grid-cols-4 justify-center items-center'
                style={style}>

                <div className='flex col-span-2 relative justify-center items-start md:min-h-screen pl-[190px] flex-col text-white space-y-5'>
                    <div className='space-y-5'>
                        <h1 className="text-7xl font-bold uppercase">
                            {
                                clickedPlaces ? showPlaces[0]?.place : places[0].place
                            }
                        </h1>
                        <p className='w-[550px]'>
                            {
                                clickedPlaces ? showPlaces[0]?.details : places[0]?.details
                            }
                        </p>
                    </div>
                    <Link to='/booking'>
                        <button className='btn bg-yellow-500 capitalize px-10'>Booking <span className='font-bold text-xl'><BsArrowRight /></span></button>
                    </Link>
                </div>

                <div className=' col-span-2'>
                    <div className="carousel carousel-center rounded-box space-x-5">
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <Link to='' onClick={() => cardClicked("Cox's Bazar")}>
                                <img src="/travel-guru-resources/images/Rectangle 1.png" alt="Pizza" className='h-full w-64 rounded-xl opacity-50' />
                            </Link>
                            <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">COX'S BAZAR</h1>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <Link to='' onClick={() => cardClicked("Sreemangal")}>
                                <img src="/travel-guru-resources/images/Sreemongol.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                                <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SREEMANGAL</h1>
                            </Link>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <Link to='' onClick={() => cardClicked("Sundarbans")}>
                                <img src="/travel-guru-resources/images/sundorbon.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                                <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SUNDARBANS</h1>
                            </Link>
                        </div>
                        <div className="carousel-item border-yellow-400 rounded-xl border-2 relative">
                            <Link to='' onClick={() => cardClicked("Sajek")}>
                                <img src="/travel-guru-resources/images/Sajek.png" alt="Pizza" className='h-96 w-64 rounded-xl opacity-60' />
                                <h1 className="text-xl font-bold absolute bottom-5 text-white left-2">SAJEK</h1>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home