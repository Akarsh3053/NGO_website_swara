import React from 'react'
import Header from '@/components/navbar'
import { MdDoubleArrow } from "react-icons/md";
const Career = () => {
  return (
    <div>
     <Header/>
       <div className='max-w-[1300px] m-auto p-2'>
       <div className='flex items-center flex-wrap-reverse gap-x-10  '>
        <div  className=' max-w-3xl '>
            <h1 className='text-3xl font-bold   underline-offset-2 text-red-500'>EDUCATIONAL CONSULTING</h1>
            <div className='max-w-40 mt-2 border-4 border-[#00AA9C]'></div>
            <div className='font-normal text-base'>
                <p className='text-main font-semibold text-xl mt-4'>
                  We provide psychological counselling to the school going children, adolescent, and youth and also to the parents in need to help overcome their problems using their inherent resources and also provide the career guidance. Conducting workshops for enhancing teacher's competence level, classroom management, team building skills and positive attitude development
                </p>
            </div>
        </div>
        <div>
            <div className='max-w-[100px] flex'>
              <img src="/Zoom.png" alt="/" />
              <img className='rounded-full -ml-10 -z-10'  src="/mainlogo.webp" alt="/" />
            </div>
           
            <ul>
                <li className='flex items-center'>Career Coaching <span className='text-xl text-[#0BACA1]'><MdDoubleArrow/></span></li>
                <li className='flex items-center'>Mid Career Consultations <span className='text-xl text-[#0BACA1]'><MdDoubleArrow /></span></li>
                <li className='flex items-center'>Conflict Resolution <span className='text-xl text-[#0BACA1]'><MdDoubleArrow/></span></li>
                <li className='flex items-center'>Career Transitions <span className='text-xl text-[#0BACA1]'><MdDoubleArrow/></span></li>
            </ul>
        </div>
        </div>
          <div className='flex md:flex-row flex-col'>
            <div>
            <h1 className='text-3xl font-bold mt-4  underline-offset-2 text-red-500'>We provide school counselling at three levels:</h1>
              <ul className='ml-10 list-disc font-semibold text-2xl'>
                <li>
                   Elementary school counselling
                </li>
                <li>
                   Secondary school counselling
                </li>
                <li>
                  Secondary school counselling
                </li>
              </ul>
            </div>
          
            <div className='mt-8'>
              <img src="/students.webp" alt="/"/>
            </div>
           
          </div>
          {/* <div className='max-w-1/2 mt-2 border-4 border-[#00AA9C]'></div> */}
          <p className='text-main font-semibold text-xl mt-4'>SAP advice high school students regarding college majors, admission requirements, entrance exams, financial aid, trade or technical schools, and apprenticeship programs. College career planning and placement counsellors assist alumni or students with career development and job hunting techniques.</p>
          <p className='text-main font-semibold text-2xl mt-4'>
             Our counsellor collaborates with:
           </p>
           <div className='flex  mt-4 items-center lg:flex-row gap-y-4 flex-col justify-center gap-x-20'>
            <div className='flex h-[450px] lg:h-[400px] flex-col p-2 hover:bg-white hover:cursor-pointer border-4 border-gray-400 items-center '>
              <div>
                <img className='rounded-full' src="/parents.png" alt="/"/>
              </div>
              <div>
                <p className='text-2xl font-bold mb-2'>Parents</p>
              </div>
              <div>
               <ul className='text-xl list-disc ml-10 font-semibold text-red-600'>
                  <li>Parental counselling</li>
                  <li>Communication Networking</li>
                  <li>Academic/ Career Awareness Programs</li>
                  <li>One -on -one parent Conferencing</li>
                </ul>
              </div>
          </div>

          <div className='flex h-[450px] lg:h-[400px] flex-col p-2 hover:bg-white hover:cursor-pointer border-4 border-gray-400 items-center '>
              <div >
                <img className=' rounded-full'  src="/teacher.webp" alt="/"/>
              </div>
              <div>
              <p className='text-2xl font-bold mb-2'>Teachers</p>
              </div>
              <div>
              <ul className='text-xl list-disc ml-10 font-semibold text-red-600'>
                <li>Parental counselling</li>
                <li>Communication Networking</li>
                <li>Academic/ Career Awareness Programs</li>
                <li>One -on -one parent Conferencing</li>
              </ul>
              </div>
              </div>
           </div>
           <div className='max-w-1/2 mt-2 border-4 border-[#00AA9C]'></div>
           <h1 className='text-3xl font-bold   underline-offset-2 text-red-500'>Student Programs</h1>
           <p className='text-main font-semibold text-xl mt-4'>We also provide solution to different psychological problems in students during their school life, children face different problems which might be a temporary issues or some psychological disorders. We help schools to deal with such students. We help students with disorders like :</p>
           <ul className='text-xl list-disc ml-10 font-semibold text-red-600'>
             <li className=' text-red-500'>Dyslexia      : <span className='text-black font-thin'>Reading Disability</span></li>
             <li className=' text-red-500'>Dysgraphia  : <span className='text-black font-thin'>Writing disability</span></li>
             <li className=' text-red-500'>Dyscalculia  : <span className='text-black font-thin'>Disability in calculation</span></li>
           </ul>

           <p className='text-main font-semibold text-xl mt-4'>We also offer Psychotherapy to provide psychological support and guidance to those identified to be having some psychological disorders based on our specialized tests.</p>
           <h1 className='text-3xl font-bold mt-4  underline-offset-2 text-blue-700'>APTITUDE TESTS & CAREER GUIDANCE</h1>
           <p className='text-main font-semibold text-xl mt-4'>To help the students of 14 years to adulthood in selecting the subjects for further based on their psychological abilities and aptitude. To help the adolescents and youth in planning their career according to their potentials, interests and aptitudes.</p>
       </div>
    </div>
  )
}

export default Career
