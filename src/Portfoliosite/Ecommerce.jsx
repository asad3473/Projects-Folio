import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import imgs from '../assets/ecom.png'
import imgs1 from '../assets/ecoms.png'

export default function Ecommerce() {
  const projects = [
    {
        img: imgs, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
    },
    {
        img: imgs1, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
    },
  ]
  
  return (
    <>
        <div className='w-full flex flex-wrap justify-around'>
            <div className='px-3 w-full md:w-[80%] flex flex-wrap mt-3 gap-4'>
            {
                            projects.map((value, ind) => (
                                <div key={ind} className='w-full md:mb-2 relative flex flex-wrap  gap-4 md:w-[48%] cursor-pointer'>

                                    <div className=' w-full h-auto relative'>
                                        <img src={value.img} className=' bg-no-repeat h-[100%] rounded-md' alt="" />
                                        <div className=' w-full md:w-[100%] absolute hide bottom-0 mb-2'>
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

      
    </>
  )
}
