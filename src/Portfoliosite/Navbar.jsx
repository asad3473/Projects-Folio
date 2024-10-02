import React, { useState } from 'react';
import './Portfolio.css';
import { FaBars, FaCloudscale, FaWhatsapp } from 'react-icons/fa';
import { HiMiniXMark } from "react-icons/hi2";

export default function Navbar() {
  // State to show or hide the navbar
  const [show, setShow] = useState(false);

  // Toggle the navbar
  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <>
      <div className=' md:fixed  md:z-20 text-lime-50 w-[100%] sm:py-3   top-0 shadow-lg shadow-orange-500/40 bg-[#6b8ac83a]'>
        <div className=' flex  justify-between items-center w-[90%] mx-auto'>
          <div className='d-flex  h-max overflow-y-hidden'>
            <span className=' text-4xl font-serif'>
              <span className=' text-orange-400'>As</span>ad
            </span>
            <span className='underline i text-2xl font-extralight'>Ullah</span>
          </div>
          <div className='icon absolute z-50 right-0 sm:top-4 top-4 pe-2    md:hidden' onClick={toggleNavbar}>
             { show ? <HiMiniXMark/>:<FaBars/>} 
          </div>
          <ul className={`flex justify-around absolute bg-[#6b8ac83a]  z-10 gap-4 flex-col top-0 lg:flex-row   w-full md:static md:w-max md:bg-transparent left-0 items-center duration-300  ${show? ' ': 'top-[-100vh] md:flex md:flex-row'} `}>
            {/* Main navbar items */}
            <li className='px-7 py-0'>
              <a href="#img" onClick={()=>setShow(false)} className='anchor'>Home</a>
            </li>
            <li className='px-7 py-0'>
              <a href="#about" onClick={()=>setShow(false)}  className='anchor'>About</a>
            </li>
            <li className='px-7 py-0'>
              <a href="#skills" onClick={()=>setShow(false)}  className='anchor'>Skills</a>
            </li>
            <li className='px-7 py-0'>
              <a href="#projects" onClick={()=>setShow(false)}  className='anchor'>Projects</a>
            </li>
            <li className='px-7 py-0'>
              <a href="#contact" onClick={()=>setShow(false)}  className='anchor'>Contact</a>
            </li>
           
          </ul>

        
          
        </div>
      </div>
    </>
  );
}
