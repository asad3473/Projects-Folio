import React from 'react'
import img1 from '../assets/quiz.png'
import { FaArrowUp } from 'react-icons/fa'
import imgs from '../assets/ecom.png'
import dashboard from '../assets/dashboard.png'
import imgs1 from '../assets/ecoms.png'
export default function Allprojects() {
    const projects = [
        {
            img: img1, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
        },
        {
            img: imgs, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
        },
        {
            img: imgs1, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
        },
        {
            img: dashboard, title: 'Projects', descrp: 'Project was about percision and information....', icon: <FaArrowUp />
        }
    ]
    return (
        <>
            <div className=''>
                <div className='w-full px-2 md:w-[90%] mx-auto mt-3'>
                    <div className='w-full md:flex flex-wrap justify-around '>
                        {
                            projects.map((value, ind) => (
                                <div key={ind} className='w-full mb-2 md:mb-2 relative flex  gap-4 md:w-[48%] cursor-pointer'>

                                    <div className='h-auto relative'>
                                        <img src={value.img} className=' bg-no-repeat rounded-md h-[100%]' alt="" />
                                        <div className='w-full py-1 text-xs md:w-[100%] absolute hide bottom-0 mb-2'>
                                            <div className='flex justify-around items-center  py-2 rounded-[40px] bg-[#f5c64ecb]'>
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
