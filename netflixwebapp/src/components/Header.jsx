import React from 'react';
import { ChevronRight } from './OpenIcon';

export default function Header() {
  return (
    <div className='w-full border-b-8 border-b-[#222] h-screen py-4 px-3 bg-hero bg-cover bg-center'>
      <nav className='flex items-center justify-between 2xl:px-10 px-7 py-2.5'>
        <img
          className='w-28 lg:w-36 2xl:w-40 cursor-pointer'
          src='/src/assets/logo.png'
          alt=''
        />
        <div>
          <button className='outline-none bg-[#db0001] text-white text-xs rounded-md px-3 py-1.5 ml-2 cursor-pointer inline-flex items-center bg-transparent border'>
            English{' '}
            <img className='w-2 ml-2 ' src='/src/assets/down-icon.png' alt='' />
          </button>
          <button className='outline-none bg-[#db0001] text-white text-xs rounded-md px-5 py-2 ml-2 cursor-pointer'>
            Sign In
          </button>
        </div>
      </nav>
      <div className='text-white flex flex-col justify-center items-center h-screen max-w-md sm:max-w-3xl m-auto'>
        <h1 className='sm:text-5xl lg:text-6xl text-4xl font-bold max-w-2xl -mt-28 text-center mb-4 tracking-wide'>
          Unlimited movies, TV shows and more.
        </h1>
        <h3 className='font-semibold sm:text-2xl text-xl md:text-3xl mb-5'>
          Watch anywhere. Cancel anytime
        </h3>
        <p className='text-xl md:text-lg text-center font-semibold'>
          Ready to watch? Enter your email to create or restrart your
          membership.
        </p>
        <form className='w-full md:max-w-2xl bg-white text-center rounded-md flex items-center outline-none mt-3 overflow-hidden'>
          <input
            className='flex-1 outline-none ml-5  text-slate-700'
            type='email'
            placeholder='Email address'
            required
          />
          <button
            className='flex md:text-xl text-lg items-center font-semibold bg-[#db0001]  text-white gap-1 px-2 py-4 lg:py-5 lg:px-8 cursor-pointer outline-none '
            type='submit'
          >
            Get Started
            <ChevronRight />
          </button>
        </form>
      </div>
    </div>
  );
}
