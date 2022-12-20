import React from 'react';

export default function Footer() {
  return (
    <div className=' max-w-6xl flex-col flex pt-12 px-10 m-auto pb-3  text-[#777]'>
      <div className='text-center sm:text-left'>
        <h2 className='text-lg font-normal mb-7'>
          Questions? call 000-111-222-333
        </h2>
      </div>
      <div className=' grid sm:grid-cols-4 text-center sm:text-left grid-cols-1 place-content-between'>
        <div>
          <a className='block text-sm mb-2.5' href='#'>
            FAQ
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Investor Relations
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Privacy
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Speed Test
          </a>
        </div>
        <div>
          <a className='block text-sm mb-2.5' href='#'>
            Help Center
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Jobs
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Cookies Preferences
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Legal Notices
          </a>
        </div>
        <div>
          <a className='block text-sm mb-2.5' href='#'>
            Account
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Ways to watch
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Corporate Information
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Only on Netflix
          </a>
        </div>
        <div>
          <a className='block text-sm mb-2.5' href='#'>
            Media Centre
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Terms of Use
          </a>
          <a className='block text-sm mb-2.5' href='#'>
            Contact Us
          </a>
        </div>
        <h2 className='mt-4'>Netflix USA</h2>
      </div>
    </div>
  );
}
