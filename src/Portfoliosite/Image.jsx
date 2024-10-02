import React from 'react'
import './Portfolio.css'
import img from '../assets/img.jpeg'
export default function Image() {

    const firstdiv = [
        {
            hello: "Hello,I'm", name: "Asad Ullah", skil: 'Front End Developer (Reactjs)', btn: "Hire Me"
        }
    ]
    return (
        <>
            <section id='img' className=''>
                <div className='flex justify-center  text-lime-50'>
                    <div className='w-full md:w-[80%] sm:flex items-center    mt-24   '>
                        {/* for content data with image*/}
                        <div className=' sm:flex  justify-center items-center relative w-full text-center md:text-start md:w-[50%] '>
                            {
                                firstdiv.map((val, ind) => (
                                    <div key={ind} className=' '>
                                        <h3 className=' text-2xl text-yellow-200'>{val.hello}</h3>
                                        <h1 className=' text-9xl font-serif  text-orange-400 h-max overflow-y-hidden'>{val.name}</h1>
                                        <h4 className=' text-xl'>{val.skil}</h4>
                                        <a href='#contact' className=' text-black '>
                                        <div className=' w-[40%] bg-orange-300 py-3 btn mx-auto md:mx-0 rounded-full md:w-[30%] flex justify-center items-center  cursor-pointer'>
                                          {val.btn}
                                        </div>
                                        </a>
                                    </div>

                                ))

                            }

        
                        </div>

                        


                        {/* image div */}
                        <div className=' w-full mx-auto md:w-[50%] mt-3 flex justify-center items-center '>
                           
                                <img src={img} alt="" className='h-96  ' />
                          
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
