import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import './Portfolio.css'
import { BsArrowsVertical } from 'react-icons/bs'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
export default function Follow() {
  return (
    <>

        <div className=' fixed  right-0 sm:w-[5%]   md:fixed md:left-0 top-40 md:w-[3%] z-20'>
                <div className='flex flex-col gap-3 text-2xl py-3 justify-center items-center text-orange-400  border-orange-400 border rounded-md '>
                        <a href="https://www.linkedin.com/in/asadi987/"><CiLinkedin/></a>
                        <a href="https://www.instagram.com/asdi9873/"><FaInstagram/></a>
                        <a href="https://github.com/asad3473"><FaGithubSquare/></a>
                        <BsArrowsVertical/>
                        <div className='text-orange-300 md:w-10 write text-xl md:text-lime-50'>
                            <span>Follow - </span>
                            <span>me</span>
                        </div>
                </div>
        </div>
      
    </>
  )
}
