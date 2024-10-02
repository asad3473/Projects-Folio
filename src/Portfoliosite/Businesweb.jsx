import React from 'react'
import img1 from '../assets/quiz.png'
import { FaArrowUp } from 'react-icons/fa'

export default function Businesweb() {
  const projects = [
    {
      img: img1, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
    }
  ]
  return (
    <>
      <div className=''>
        <div className='w-full md:w-[90%] mx-auto mt-2'>
          <div className=' md:flex flex-wrap justify-around'>
            {
              projects.map((value, ind) => (
                <div key={ind} className='px-3 w-full md:mb-2 relative flex  gap-4 md:w-[48%] cursor-pointer'>

                  <div className='w-full h-auto relative '>
                    <img src={value.img} className=' bg-no-repeat rounded-md' alt="" />
                    <div className='w-full md:w-[100%] absolute hide bottom-0 mb-2'>
                      <div className='text-xs flex justify-around items-center  py-2 rounded-[40px] bg-[#f5c64ecb]'>
                        <div>
                          <span className=' text-2xl'>{value.title}</span>
                          <p>{value.descrp}</p>
                        </div>
                        <div className=' moveicon'>
                          <span className=' text-2xl '>{value.icon}</span>
                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              ))

            }
          </div>

        </div>
      </div>

    </>
  )
}
