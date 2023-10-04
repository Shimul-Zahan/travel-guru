import React from 'react'

const HotelIndivisual = ({hotel}) => {
  return (
      <div className='flex justify-start items-center gap-8'>
          <img src="../../public/travel-guru-resources/images/Sreemongol.png" alt="" className='h-48 w-72' />
          <div className='space-y-2'>
              <h1 className="text-xl font-bold">{hotel.name}</h1>
              <p className='text-base font-medium'>Free wifi<span className='text-bold'> | </span>One conference room<span className='text-bold'> | </span>Swimming Pool</p>
              <p className="text-base font-medium">Cancellation fexibility available</p>
              <div className='flex justify-start items-center gap-2'>
                  <img src="../../public/travel-guru-resources/images/icons/star_1_.png" alt="" className='h-5' />
                  <h1 className='font-bold'><span>{hotel.rating}</span><span>(20)</span></h1>
                  <h1 className='font-bold ml-10'>Rate:{hotel.price}</h1>
              </div>
              <button className='btn bg-yellow-500 capitalize px-8'>Book Now</button>
          </div>
      </div>
  )
}

export default HotelIndivisual