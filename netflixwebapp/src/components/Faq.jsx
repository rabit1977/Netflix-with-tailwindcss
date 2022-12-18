import React from 'react';

export default function Faq() {
  return (
    <div className='p-3 text-center text-sm text-white'>
      <h2 className='text-white/80 font-semibold tracking-wider text-3xl'>
        Frequently Asked Questions
      </h2>
      <ul className='mt-14 w-full max-w-[750px]'>
        <li className='w-full p-1.5'>
          <input type='radio' name='accordion' id='first' />
          <label
            className='relative flex items-center justify-between p-5 text-sm font-medium bg-[#303030] mb-0.5 cursor-pointer after:content-["+"]'
            htmlFor='first'
          >
            What is Netflix?
          </label>
          <div>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
          </div>
        </li>
        <li>
          <input type='radio' name='accordion' id='first' />
          <label htmlFor='first'>How much does Netflix cost?</label>
          <div>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
            </p>
          </div>
        </li>
        <li>
          <input type='radio' name='accordion' id='first' />
          <label htmlFor='first'>Where can I watch?</label>
          <div>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p>
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </li>
        <li>
          <input type='radio' name='accordion' id='first' />
          <label htmlFor='first'>How do i cancel?</label>
          <div>
            <p>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        </li>
        <li>
          <input type='radio' name='accordion' id='first' />
          <label htmlFor='first'>What can I watch on Netflix?</label>
          <div>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </li>
        <li>
          <input type='radio' name='accordion' id='first' />
          <label htmlFor='first'>Is Netfilx good for kids??</label>
          <div>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
