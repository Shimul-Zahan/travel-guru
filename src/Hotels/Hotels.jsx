import React, { useContext, useEffect, useState } from 'react'
import NavbarWithBlackText from '../Components/Navbar/NavbarWithBlackText'
import Maps from '../Components/Maps/Maps'
import { useLoaderData } from 'react-router-dom'
import { MyContext } from '../Context/ContextAuth'
import HotelIndivisual from './HotelIndivisual'

const Hotels = () => {

    const { clickedPlaces, filterPlaces } = useContext(MyContext);
    const hotels = useLoaderData();

    const separateHotel = hotels?.filter(hotel => hotel?.place == clickedPlaces);
    // console.log(separateHotel)



    return (
        <div className='container mx-auto'>
            <NavbarWithBlackText />
            <hr className='h-[2px] bg-gray-300' />
            <h1 className="py-6 text-2xl font-bold">Stay in {clickedPlaces}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className='space-y-10'>
                    {
                        separateHotel.map(hotel => <HotelIndivisual key={hotel.id} hotel={hotel} />)
                    }
                </div>

                <div>
                    <Maps />
                </div>
            </div>
        </div>
    )
}

export default Hotels