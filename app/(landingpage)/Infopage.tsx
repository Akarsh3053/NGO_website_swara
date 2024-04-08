import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

const InfoPage = () => {
  return (
    <div className='max-w-[1400px] m-auto p-2'>
      <div className="flex flex-row w-full">

        <div className="w-2/3 p-4"> {/* First column takes 2/3 of the width */}
          <div className='flex flex-col items-center gap-4'>
            <div className='flex md:flex-row mt-6 flex-col gap-x-10'>
              <div>
                <div>
                  <h1 className='text-lg text-[#213370]'>take control of</h1>
                  <h1 className='text-5xl  text-[#213370] font-bold'>YOUR LIFE</h1>
                </div>
                <div className='xl:max-w-4xl lg:max-w- w-full'>
                  <p>Most people, regardless of age, will require psychological assistance at some point of time in their lives.
                    Consultation with a psychologist may help people function better, whatever their life, education or work
                    situation may be- and preventing other problems from developing.</p>
                </div>
              </div>
            </div>

            <div>
              <div className='mt-10'>
                <h1 className='text-lg text-[#213370]'>stop panicking</h1>
                <h1 className='text-5xl  text-[#213370] font-bold'>START LIVING.</h1>
              </div>
              <div className='xl:max-w-4xl lg:max-w- w-full'>
                <p>At Swara Foundation we strongly believe that these problems are very easy and simple to deal with its
                  just that either we fail to understand the actual thing in first place or we just start thinking vaguely
                  about consequences without even trying to solve it. Overcoming this fear is the first step to the treatment.</p>
              </div>

              <div className='mt-10'>
                <h1 className='text-lg text-[#213370]'>TAKE BACK</h1>
                <h1 className='text-5xl  text-[#213370] font-bold'>YOUR LIFE.</h1>
              </div>
              <div className='xl:max-w-4xl lg:max-w- w-full'>
                <p>Due to such consuming and exhausting lifestyle these days people are facing several psychological problems which we generally overlook
                  but in long term these problem may get even worse and sometime cause disbalance in life that's
                  why being aware to mental problems can prevent the crisis. Knowing yourself from within is often
                  the best way to live a healthy life both mentally and physically.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4"> {/* Second column takes 1/3 of the width */}
          <div className='flex flex-col items-center gap-5'>
            <div>
              <div className='flex'>
                <img className='rounded-full' src="/meditation.webp" alt="/" />
                <img className='-ml-16' src="/flower.webp" alt="/" />
              </div>
              <div className='mt-2'>
                <h1 className='text-[#00AA9C] text-4xl font-semibold'>Schedule Free</h1>
                <h1 className='text-[#A7A08C] text-3xl font-semibold flex items-center gap-x-2'>Consultation <FaLocationArrow className='text-[#00AA9C]' /> </h1>
              </div>
            </div>

            <div className='flex flex-col gap-5 items-center'>
              <div>
                <img src="/Quote.webp" alt="/" />
              </div>
              <div className='flex flex-col max-w-64'>
                <h1>What mental health needs is more sunlight, more candor, and more unashamed conversation.
                  <p className='mt-2 text-gray-500'>– Glenn Close</p>
                </h1>
              </div>
              {/* <div className='flex flex-col max-w-64'>
                <h1>Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going
                  <p className='mt-2 text-gray-500'>– Noam Shpencer</p>
                </h1>
              </div> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoPage
