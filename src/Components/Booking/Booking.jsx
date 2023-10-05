import React, { useContext } from 'react'
// BsArrowRight
import { Navbar } from '../Navbar/Navbar';
import { MyContext } from '../../Context/ContextAuth';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';


const Booking = () => {

    const { cardClicked, clickedPlaces, bookingDta } = useContext(MyContext);
    const places = useLoaderData();
    const showPlaces = places.filter(item => item.place == clickedPlaces);
    // console.log(clickedPlaces)
    const navigate = useNavigate();

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
    
    const handleBooking = (e) => {
        e.preventDefault();
        const origin = e.target.origin.value;
        const destination = e.target.destination.value;
        const from = e.target.from.value;
        const to = e.target.to.value;

        bookingDta(origin, destination, from, to)
        e.target.reset();
        navigate('/hotels/booking')
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
                </div>

                <div className=' col-span-2 pr-[190px]'>   
                    <form onSubmit={handleBooking}>
                        <div className='h-[500px] bg-base-100 rounded-lg p-8 space-y-6'>
                            <div className='space-y-2'>
                                <p className='text-lg font-medium text-gray-600'>Origin</p>

                                <input type="text" required name='origin' placeholder="Your visiting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16 placeholder:text-black border-none bg-gray-200 input-bordered w-full" />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-lg font-medium text-gray-600'>Destination</p>

                                <input type="text" required value={clickedPlaces} name='destination' placeholder="Your visiting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16 placeholder:text-black border-none bg-gray-200 input-bordered w-full" />
                            </div>
                            <div className='flex justify-between items-center gap-10'>
                                <div className='space-y-2 w-1/2'>
                                    <p className='text-lg font-medium text-gray-600'>From</p>

                                    <input type="date"  name='from' required placeholder="Your starting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16 placeholder:text-black border-none bg-gray-200 input-bordered w-full" />
                                </div>
                                <div className='space-y-2 w-1/2'>
                                    <p className='text-lg font-medium text-gray-600'>To</p>

                                    <input type="date" name='to' required placeholder="Your starting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16  border-none bg-gray-200 input-bordered w-full" />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                    <input type="submit" value="Booking Hotel Now" className="input cursor-pointer pl-8 font-bold bg-yellow-500 text-xl border-none h-16 input-bordered w-full" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Booking