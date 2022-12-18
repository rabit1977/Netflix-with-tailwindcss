import React from 'react';

export default function Features() {
  return (
    <>
      <div className='relative border-b-8 border-b-[#222]  md:text-xl w-full  mx-auto text-center text-md py-12'>
        <div className='flex flex-col md:6/12 w-5/6 md:flex-row gap-4 items-center py-16 m-auto '>
          <div className='basis-1/2 md:text-left'>
            <h2 className='text-white lg:text-7l sm:text-4xl text-3xl font-semibold mb-3'>
              Enjoy on your TV.
            </h2>
            <p className='text-white xl:text-3xl md:text-2xl sm:text-lg text-lg'>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className='basis-1/2 '>
            <img className='w-11/12 m-auto' src='feature-1.png' alt='' />
          </div>
        </div>
      </div>
      <div className='border-b-8 border-b-[#222]  md:text-xl w-full  mx-auto text-center text-md'>
        <div className='flex flex-col md:6/12 w-5/6 md:flex-row gap-4 items-center py-16 m-auto '>
          <div className='basis-1/2 mb-5 order-2'>
            <img className='w-11/12 m-auto' src='feature-2.png' alt='' />
          </div>
          <div className='basis-1/2 md:text-left order-1 md:order-2'>
            <h2 className='text-white lg:text-7l sm:text-4xl text-3xl font-semibold mb-3'>
              Download your shows to watch offline.
            </h2>
            <p className='text-white xl:text-3xl md:text-2xl sm:text-lg text-lg'>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className='relative border-b-8 border-b-[#222]  md:text-xl w-full  mx-auto text-center text-md py-12'>
        <div className='flex flex-col md:6/12 w-5/6 md:flex-row gap-4 items-center py-16 m-auto '>
          <div className='basis-1/2 md:text-left'>
            <h2 className='text-white lg:text-7l sm:text-4xl text-3xl font-semibold mb-3'>
              Watch everywhere.
            </h2>
            <p className='text-white xl:text-3xl md:text-2xl sm:text-lg text-lg'>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className='basis-1/2 '>
            <img className='w-11/12 m-auto' src='feature-3.png' alt='' />
          </div>
        </div>
      </div>
      <div className='border-b-8 border-b-[#222]  md:text-xl w-full  mx-auto text-center text-md'>
        <div className='flex flex-col md:6/12 w-5/6 md:flex-row gap-4 items-center py-16 m-auto '>
          <div className='basis-1/2 mb-5 order-2'>
            <img className='w-11/12 m-auto' src='feature-4.png' alt='' />
          </div>
          <div className='basis-1/2 md:text-left order-1 md:order-2'>
            <h2 className='text-white lg:text-7l sm:text-4xl text-3xl font-semibold mb-3'>
              Create profiles for kids.
            </h2>
            <p className='text-white xl:text-3xl md:text-2xl sm:text-lg text-lg'>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
