import React from 'react'
import img from '../assets/img.jpeg'
import Animatedtext from './Animatedtext'
import resume from '../assets/resume by asad.pdf'

export default function Aboutme() {

    // about me content

    const aboutme = [
        {
            description: "Hi There! I'm Asad Ullah", skill: 'Front End Developer (React Js)', summary: 'Front-end developer with expertise in React.js, adept at building responsive and dynamic web applications. Proficient in modern libraries and frameworks like Material-UI, Ant Design, Tailwind CSS, Bootstrap, and the latest React tools such as React Router and Redux. Skilled in JavaScript, TypeScript, HTML, CSS, and delivering clean, maintainable, and high-performance code with a focus on accessibility and modern UI/UX principles.', phone: '0307-9873475', email: 'asadsoomro0311@gmail.com', from: 'Faisal Colony street no1 Bahawalpur, Pakistan', language: 'English,Urdu', btn: 'Download Resume'
        }
    ]
    return (
        <>
            <section id='about'>

                <Animatedtext text="About Me" className='z-40 absolute' />
                <div className=' flex justify-center mt-4 '>
                    {/* flex div parent divi*/}
                    <div className='  w-[90%] flex flex-col md:flex-row flex-wrap justify-center items-center relative'>

                        {/* image div  child one*/}
                        <div className='  sm-full w-full md:w-[50%] flex justify-center'>
                            <img src={img} alt="" className=' md:h-82 md:w-72 rounded-sm' />
                        </div>

                        {/* about content child two*/}
                        <div className=' w-full md:w-[50%] '>

                            {
                                aboutme.map((item, ind) => (
                                    <div className='flex flex-col gap-3  text-[#a9adb8]' key={ind}>
                                        <h1 className=' text-3xl h-max overflow-y-hidden'>{item.description}</h1>
                                        <h4>{item.skill}</h4>
                                        <p>
                                            {item.summary}
                                        </p>
                                        <p>Email: {item.email}</p>
                                        <p>Contact: {item.phone}</p>
                                        <p>Address: {item.from}</p>
                                        <a href={resume} download>
                                            <div className='w-[50%]  md:w-[50%] text-black flex justify-center items-center py-3 bg-orange-300 rounded-full btn'>
                                                {item.btn}
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
