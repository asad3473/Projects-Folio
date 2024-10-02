import React from 'react'
import Animatedtext from './Animatedtext'
import { MdOutlineContactPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { TbAddressBook } from "react-icons/tb";
export default function Contactus() {

    const aboutme = [
        {
            contact: "Contact Info", description: "Hi There! I'm Asad Ullah", skill: 'Front-end developer specializing in React.js with experience in creating responsive and user-friendly web applications. Skilled in modern libraries and frameworks such as Material-UI, Ant Design, and Tailwind CSS.'
        },
        {
            icon: <IoMailOutline />, name: 'Email', one: 'asadsoomro0311@gmail.com'
        },
        {
            icon: <MdOutlineContactPhone />, name: 'Phone', one: '+92 307 9873475', two: '+92 318 6463949'
        },
        {
            icon: <TbAddressBook />, name: 'Address', one: 'Faisal Colony Street No.01 Bahawalpur, Pakistan'
        }

    ]
    return (
        <>
            <div id="contact">
                <Animatedtext text='Contact Us' />

                <div className=' flex justify-center'>
                    <div className='w-full md:w-[90%] flex flex-wrap '>

                        {/* form div data one */}
                        <div className='w-full md:w-[50%] px-3'>
                            <h1 className='text-2xl mb-1  text-[#a9adb8]'>Just say Hello</h1>
                            <div className=' hover:border-yellow-400 duration-300 md:w-[100%]  mb-4 border border-gray-400 rounded-md '>
                                <input type="text" name="" className='bg-inherit capitalize w-full py-2 px-2 text-[#a9adb8] rounded border-transparent outline-none' id="" placeholder='Enter your name...' />
                            </div>
                            <div className='hover:border-yellow-400 duration-300 md:w-[100%]  mb-4 border border-gray-400 rounded-md '>
                                <input type="text" name="" className='bg-inherit capitalize w-full py-2 px-2 text-[#a9adb8] rounded border-transparent outline-none' id="" placeholder='Enter your email...' />
                            </div>
                            <div className='hover:border-yellow-400 duration-300 md:w-[100%]  mb-4 border border-gray-400 rounded-md '>
                                <input type="text" name="" className=' bg-inherit capitalize w-full py-2 px-2 text-[#a9adb8] rounded border-transparent outline-none' id="" placeholder='Enter your subject...' />
                            </div>
                            <div className='hover:border-yellow-400 duration-300 md:w-[100%]   mb-4 border border-gray-400 rounded-md '>
                                <textarea type="text" name="" rows={6} className=' capitalize bg-inherit  w-full h-full py-2 px-2 text-[#a9adb8] rounded border-transparent outline-none' id="" placeholder='Enter your message...' />
                            </div>

                            <button className=' bg-orange-300 p-3 mb-2 rounded-full btn'>Submit Message</button>
                        </div>

                        {/* contaent div two */}
                        <div className='w-full px-3 md:w-[50%]'>
                            {aboutme.map((item, ind) => (
                                <div className='text-[#a9adb8] w-full ' key={ind}>
                                    {/* Check if the item has the `icon` property */}
                                    {item.icon ? (
                                        <div className='flex mt-3 mb-2   md:flex justify-start md:items-center gap-3 '>
                                            <div className='hover:border-yellow-400 hover:text-yellow-300 duration-300 text-[#a9adb8] rounded-full border border-gray-300 h-[40px] w-[20px] md:h-[40px]  md:w-[8%] flex justify-center items-center cursor-pointer md:my-2'>
                                                <span className='md:text-2xl'>{item.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className='text-xl text-lime-50'>{item.name}</h3>
                                                <p>{item.one}</p>
                                                {item.two && <p>{item.two}</p>}
                                            </div>
                                        </div>
                                    ) : (
                                        // This renders the contact info section
                                        <>
                                            <h1 className='text-2xl'>{item.contact}</h1>
                                            <p>{item.skill}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
