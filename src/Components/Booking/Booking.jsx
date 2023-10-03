import React from 'react'
// BsArrowRight
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Booking = () => {
    return (
        <div className='min-h-screen w-full absolute bg-cover bg-blend-overlay bg-black top-0 -z-10 bg-opacity-70 grid grid-cols-1 md:grid-cols-4 justify-center items-center'
            style={{
                backgroundImage: 'url("./travel-guru-resources/images/Rectangle 1.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className='flex col-span-2 relative justify-center items-start md:min-h-screen pl-[190px] flex-col text-white space-y-5'>
                <div className='space-y-5'>
                    <h1 className="text-7xl font-bold">COX'S BAZAR</h1>
                    <p className='w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam aut error soluta nulla maxime est, alias architecto illo aspernatur optio? Doloremque eveniet assumenda repellendus quam molestiae quibusdam! Aliquid, ab?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam aut error soluta nulla maxime est, alias architecto illo aspernatur optio? Doloremque eveniet assumenda repellendus quam molestiae quibusdam! Aliquid, ab?</p>
                </div>
            </div>

            <div className=' col-span-2 pr-[190px]'>
                <div className='h-[500px] bg-base-100 rounded-lg p-8 space-y-6'>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium text-gray-600'>Origin</p>
                        <input type="text" name='origin' placeholder="Your starting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl placeholder:text-black h-16 border-none bg-gray-200 input-bordered w-full" />
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium text-gray-600'>Destination</p>
                        <input type="text" name='destination' placeholder="Your visiting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16 placeholder:text-black border-none bg-gray-200 input-bordered w-full" />
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <div className='space-y-2 w-1/2'>
                            <p className='text-lg font-medium text-gray-600'>From</p>
                            <input type="date" name='origin' placeholder="Your starting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16 placeholder:text-black border-none bg-gray-200 input-bordered w-full" />
                        </div>
                        <div className='space-y-2 w-1/2'>
                            <p className='text-lg font-medium text-gray-600'>To</p>
                            <input type="date" name='origin' placeholder="Your starting place here..." className="input pl-8 font-bold text-xl placeholder:text-bold placeholder:text-xl h-16  border-none bg-gray-200 input-bordered w-full" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <input type="button" value="Start Booking"className="input pl-8 font-bold bg-yellow-500 text-xl border-none h-16 input-bordered w-full" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Booking