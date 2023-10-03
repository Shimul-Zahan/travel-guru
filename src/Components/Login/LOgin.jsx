import React from 'react'
import NavbarWithBlackText from '../Navbar/NavbarWithBlackText'

const LOgin = () => {
  return (
      <div className='container mx-auto'>
          <NavbarWithBlackText />
          <div className='w-full md:min-h-[750px] flex justify-center items-center'>
              <div className=' w-[650px] bg-base-100 rounded-lg p-8 space-y-6 border-2'>
                  <h1 className="text-xl font-bold mb-12">Login</h1>
                  <div class="relative h-11 w-full min-w-[200px]">
                      <input
                          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                      />
                      <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          <span className='text-lg'>Username or Email</span>
                      </label>
                  </div>
                  <div class="relative h-11 w-full min-w-[200px]">
                      <input
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
                      <input type="button" value="Login" className="input pl-8 font-bold bg-yellow-500 text-xl border-none h-16 input-bordered w-full" />
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default LOgin