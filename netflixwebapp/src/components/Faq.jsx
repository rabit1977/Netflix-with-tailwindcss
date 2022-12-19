import React from 'react';
import OpenIcon from './OpenIcon';

export default function Faq() {
  return (
    <>
      <div className='border-b-8 border-b-[#303030]'>
        <div className='w-full max-w-[750px] m-auto  text-center text-sm text-white pb-16 '>
          <h2 className='text-white/80 font-semibold tracking-wider text-3xl'>
            Frequently Asked Questions
          </h2>
          <ul className='mt-8'>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] cursor-pointer'>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>What is Netflix?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <br />
                  <p>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </label>
            </li>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer '>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>How much does Netflix cost?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from EUR7.99 to EUR11.99 a month. No extra costs, no
                    contracts.
                  </p>
                </div>
              </label>
            </li>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer '>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>Where can I watch?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                  </p>
                  <br />
                  <p>
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                </div>
              </label>
            </li>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer '>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>How do I cancel?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </div>
              </label>
            </li>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer '>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>What can I watch on Netflix?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </div>
              </label>
            </li>
            <li className='w-full p-1.5'>
              <label className='peer relative flex flex-col  items-center justify-between p-4 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer '>
                {' '}
                <input className='hidden peer' type='radio' name='accordion' />
                <div className='w-full flex justify-between items-center'>
                  <p className=''>Is Netflix good for kids?</p>
                  <OpenIcon />
                </div>
                <div className='bg-[#303030] text-left px-5 overflow-hidden max-h-0 peer-checked:max-h-screen peer-checked:mt-4'>
                  <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </div>
              </label>
            </li>{' '}
          </ul>
          <small>
            Ready to watch? Enter your email to create or restart your
            membership.
          </small>
          <form className='w-full m-auto max-w-xl bg-white text-center rounded-md flex items-center outline-none mt-7 overflow-hidden'>
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
    </>
  );
}
