import React from 'react';

export default function Header() {
  return (
    <div className='w-full h-screen py-4 px-3 bg-hero bg-cover bg-center'>
      <nav className='flex items-center justify-between py-2.5'>
        <img className='w-36 cursor-pointer' src='logo.png' alt='' />
        <div>
          <button className='outline-none bg-[#db0001] text-white text-xs rounded-md px-3 py-1.5 ml-2 cursor-pointer inline-flex items-center bg-transparent border'>
            English <img className='w-2 ml-2 ' src='down-icon.png' alt='' />
          </button>
          <button className='outline-none bg-[#db0001] text-white text-xs rounded-md px-5 py-2 ml-2 cursor-pointer'>
            Sign In
          </button>
        </div>
      </nav>
      <div className='w-full text-white flex flex-col justify-center items-center h-screen -mt-20'>
        <h1 className='text-6xl font-semibold max-w-2xl text-center'>
          Unlimited movies, TV shows and more.
        </h1>
        <h3 className='font-normal mb-5'>Watch anywhere. Cancel anytime</h3>
        <p>
          Ready to watch? Enter your email to create or restrart your
          membership.
        </p>
        <form className='w-full max-w-xl bg-white text-center rounded-md flex items-center outline-none mt-7 overflow-hidden'>
          <input
            className='flex-1 outline-none ml-5 text-slate-700'
            type='email'
            placeholder='Email address'
            required
          />
          <button
            className='bg-[#db0001]  text-white text-sm px-8 py-3 cursor-pointer outline-none '
            type='submit'
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
