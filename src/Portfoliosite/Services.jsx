import React from 'react'
import Animatedtext from './Animatedtext'
import { SiAffinitydesigner, SiSemanticweb, SiSpeedtest } from 'react-icons/si'
import { FaConnectdevelop, FaHive, FaSalesforce, FaStumbleuponCircle } from 'react-icons/fa'
export default function Services() {
  const services = [

    {
      icon: <SiAffinitydesigner />, tittle: 'State Management Solutions', description: 'Display your proficiency with Redux or Context API for managing complex state across applications. Provide case studies where state management played a crucial role.'
    },
    {
      icon: <FaStumbleuponCircle />, tittle: 'API Integration', description: 'Include projects that demonstrate your ability to integrate with RESTful APIs or GraphQL, fetching and displaying dynamic data in React apps.'
    },
    {
      icon: <FaConnectdevelop />, tittle: 'Component Develop or Reusability', description: 'Show examples where you’ve built reusable React components that can be applied across various projects. Emphasize modular and maintainable code.'
    },
    {
      icon: <FaHive/>  , tittle: 'Responsive UI/UX Development', description: 'Highlight your ability to create mobile-friendly, responsive designs. Include examples where you’ve used React along with responsive design frameworks like Tailwind CSS or Bootstrap.'
    },
    {
      icon: <SiSemanticweb />, tittle: 'Custom Web Application', description: 'Display your ability to build feature-rich, scalable applications tailored to user needs. Show examples of real-world projects with screenshots, descriptions, and live demos.'
    },
    {
      icon: <SiSpeedtest />, tittle: 'Performance Optimization', description: 'Feature projects where you’ve optimized React applications for speed and performance, focusing on minimizing load times and improving user experience.'
    }
  ]
  return (
    <>

      <Animatedtext text="Services" />

      <div className=' flex justify-center' >
        <div className=' w-[90%] relative'>

          {/* servies map */}
          <div className='w-full   md:flex justify-center flex-wrap my-3 gap-4 relative'>
            {
              services.map((value, index) => (
                <div className='  md:w-[30%] relative shadow mb-2' key={index}>
                  <div className='h-full flex justify-center items-center  flex-col border px-3 py-3 rounded-md cursor-pointer triangle relative'>
                    <div className=' h-[40px] w-[10%] hover:border-yellow-400 hover:text-yellow-300 duration-300 text-[#a9adb8]  rounded-full border border-gray-300 md:h-[40px] flex justify-center items-center cursor-pointer  md:w-[15%] relative'>
                      <span className='  text-2xl'>{value.icon}</span>
                    </div>
                    <h3 className=' text-xl text-lime-50'>{value.tittle}</h3>
                    <p className=' text-[#a9adb8] text-justify'>{value.description.slice(0, 102)}..</p>
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
