import Header from '@/components/navbar'
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";

const ServicePage = () => {
    return (
        <div>
            <Header />
            <div className='max-w-[1300px] m-auto p-2'>
                <div className='flex items-center flex-wrap-reverse gap-x-10  '>
                    <div className=' max-w-3xl '>
                        <h1 className='text-3xl font-bold  underline underline-offset-2'>Counselling Services</h1>
                        <h1 className='text-xl font-semibold mt-6'>Relationship/Career/Family/Balance/Health & Body​/Communication​</h1>
                        <div className='font-normal text-base'>
                            At Swara Academy of Psychology we provide counselling services on several problems related to different social and personal causes. We aim to to overcome these challenges and help our client with the best we can.  These counselling sessions are planned after a detailed study of patient by several psychological analysis and tests.
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='max-w-[100px] flex'>
                            <img src="/Zoom.png" alt="/" />
                            <img className='rounded-full -ml-10 -z-10' src="/mainlogo.webp" alt="/" />
                        </div>

                        <ul>
                            <li className='flex items-center'>Private Life Coaching <span className='text-xl text-[#0BACA1]'><MdDoubleArrow /></span></li>
                            <li className='flex items-center'>Seminar & workshops <span className='text-xl text-[#0BACA1]'><MdDoubleArrow /></span></li>
                            <li className='flex items-center'>Online Courses <span className='text-xl text-[#0BACA1]'><MdDoubleArrow /></span></li>
                        </ul>
                    </div>
                </div>
                <div className='max-w-40 mt-2 border-4 border-[#00AA9C]'></div>
                <div className='grid lg:grid-cols-4  items-center justify-center md:grid-cols-3  sm:grid-cols-2  gap-y-4  gap-x-10 mt-10 '>
                    <div className='w-64 p-2 h-60   bg-[#F2BF5E] flex flex-col items-center justify-center text-white'>
                        <img src="/brain test.webp" className='h-25 w-20' alt="/" />
                        <h1 className='text-lg font-semibold text-center'>IQ Testing</h1>
                        <p className='text-center'>Assessment of the mental capital of individuals from 3 years to adulthood.</p>
                    </div>
                    <div className='w-64 p-2 h-60   bg-[#FF6161] flex flex-col items-center justify-center text-white'>
                        <img src="/iq_edited.webp" className='h-25 w-20' alt="/" />
                        <h1 className='text-lg font-semibold text-center'>EQ Testing</h1>
                        <p className='text-center'>Testing individual’s assessment of  awareness about other, Emotional control, empathy etc.</p>
                    </div>
                    <div className='w-64 p-2 h-60   bg-[#536EB7] flex flex-col items-center justify-center text-white'>
                        <img src="/brainblack.webp" className='h-25 w-20' alt="/" />
                        <h1 className='text-lg font-semibold text-center'>Brain Testing</h1>
                        <p className='text-center'>Measures Brain dominance & (auditory vs visual assimilation).</p>
                    </div>
                    <div className='w-64 p-2 h-60   bg-[#75CBA8] flex flex-col items-center justify-center text-white'>
                        <img src="/personality map.webp" className='h-25 w-20' alt="/" />
                        <h1 className='text-lg font-semibold text-center'>Personality Mapping</h1>
                        <p className='text-center'>Assessment of the type of personality to help in correct career planning of an individual.</p>
                    </div>
                    <div className='max-w-80 mt-2 border-4 border-[#00AA9C]'></div>
                </div>
                <div>
                    <div className='flex gap-x-4 mt-4 items-center'>
                        <img src="/family.webp" alt="/" />
                        <h1 className='text-4xl font-bold '>Family Counselling</h1>
                    </div>
                    <p className='text-main mt-2 max-w-5xl text-xl font-semibold'>We provide several services for families facing problems such as lack of coordination, lack of bonding among members etc. We at Swara Foundation believe that one can only be mentally fit if there is a healthy family environment. We offer following services -</p>
                    <ul className='text-main ml-10 list-disc text-xl font-semibold mt-2'>
                        <li >Child counselling</li>
                        <li>Parental counselling</li>
                        <li>Marital counselling</li>
                    </ul>
                    <h1 className='text-red-400 font-semibold text-2xl mt-8 mb-2 underline'>Behavior Modification</h1>
                    <p className='text-main mt-2 max-w-5xl text-xl font-semibold'>We also deal with some special behavioral problems of children and adolescents in their growing age they go through several changes mentally and physically hence its very common. So we designed our session considering these things so that we can help both parents and children to overcome such problems.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicePage
