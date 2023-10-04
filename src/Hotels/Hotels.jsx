import React from 'react'
import NavbarWithBlackText from '../Components/Navbar/NavbarWithBlackText'
import Maps from '../Components/Maps/Maps'

const Hotels = () => {
    return (
        <div className='container mx-auto'>
            <NavbarWithBlackText />
            <hr className='h-[2px] bg-gray-300' />
            <h1 className="py-6 text-2xl font-bold">Stay in Cox's Bazar</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className='space-y-10'>
                    <div className='flex justify-start items-center gap-8'>
                        <img src="../../public/travel-guru-resources/images/Sreemongol.png" alt="" className='h-48 w-72' />
                        <div className='space-y-2'>
                            <h1 className="text-xl font-bold">Hotel Kings Fucking Star</h1>
                            <p className='text-base font-medium'>Free wifi<span className='text-bold'> | </span>One conference room<span className='text-bold'> | </span>Swimming Pool</p>
                            <p className="text-base font-medium">Cancellation fexibility available</p>
                            <div className='flex justify-start items-center gap-2'>
                                <img src="../../public/travel-guru-resources/images/icons/star_1_.png" alt="" className='h-5' />
                                <h1 className='font-bold'><span>4.9 </span><span>(20)</span></h1>
                                <h1 className='font-bold ml-10'><span className='font-normal'>Rate: </span>$500<span className='font-normal'>/night</span></h1>
                            </div>
                            <button className='btn bg-yellow-500 capitalize px-8'>Book Now</button>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <img src="../../public/travel-guru-resources/images/Sreemongol.png" alt="" className='h-48 w-72' />
                        <div className='space-y-2'>
                            <h1 className="text-xl font-bold">Hotel Kings Fucking Star</h1>
                            <p className='text-base font-medium'>Free wifi<span className='text-bold'> | </span>One conference room<span className='text-bold'> | </span>Swimming Pool</p>
                            <p className="text-base font-medium">Cancellation fexibility available</p>
                            <div className='flex justify-start items-center gap-2'>
                                <img src="../../public/travel-guru-resources/images/icons/star_1_.png" alt="" className='h-5' />
                                <h1 className='font-bold'><span>4.9 </span><span>(20)</span></h1>
                                <h1 className='font-bold ml-10'><span className='font-normal'>Rate: </span>$500<span className='font-normal'>/night</span></h1>
                            </div>
                            <button className='btn bg-yellow-500 capitalize px-8'>Book Now</button>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <img src="../../public/travel-guru-resources/images/Sreemongol.png" alt="" className='h-48 w-72' />
                        <div className='space-y-2'>
                            <h1 className="text-xl font-bold">Hotel Kings Fucking Star</h1>
                            <p className='text-base font-medium'>Free wifi<span className='text-bold'> | </span>One conference room<span className='text-bold'> | </span>Swimming Pool</p>
                            <p className="text-base font-medium">Cancellation fexibility available</p>
                            <div className='flex justify-start items-center gap-2'>
                                <img src="../../public/travel-guru-resources/images/icons/star_1_.png" alt="" className='h-5' />
                                <h1 className='font-bold'><span>4.9 </span><span>(20)</span></h1>
                                <h1 className='font-bold ml-10'><span className='font-normal'>Rate: </span>$500<span className='font-normal'>/night</span></h1>
                            </div>
                            <button className='btn bg-yellow-500 capitalize px-8'>Book Now</button>
                        </div>
                    </div>
                </div>

                <div>
                    <Maps />
                </div>
            </div>
        </div>
    )
}

export default Hotels