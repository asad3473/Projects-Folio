import React from 'react'
import Animatedtext from './Animatedtext'

export default function Skills() {

    const contentone = [
        {
            title: 'All the skills that I have in that field of work are mentioned', description: ' I consistently deliver modular and maintainable code.I ensure that every project I work on is optimized for performance and speed, using techniques like code-splitting, lazy loading, and render optimization'
        }

    ]

    const skilstwo = [
        {
            skil: 'API Integration', percent: 85
        },
        {
            skil: 'Redux Toolkit', percent: 85
        },

        {
            skil: 'TypeScript', percent: 80
        },
        {
            skil: 'Next JS', percent: 90
        },
        {
            skil: 'JavaScript', percent: 90
        },
        {
            skil: 'Tailwind CSS', percent: 95
        },
        {
            skil: 'Bootstrap', percent: 95
        }
    ]
    return (
        <>

            <section id='skills'>
                <Animatedtext text='Skills' />

                <div className='flex justify-center'>
                    <div className=' w-full md:w-[90%] flex flex-wrap justify-around items-center'>
                        {/* content div one */}
                        <div className='w-full md:w-[50%]'>
                            {
                                contentone.map((val, ind) => (
                                    <div className=' text-[#a9adb8]  md:my-10  mx-4' key={ind}>
                                        <h2 className=' text-2xl font-serif'>{val.title}</h2>
                                        <p className='mt-2 md:mt-3'>{val.description}</p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* skils div two */}

                        <div className='w-full md:w-[50%] '>
                            <div className=' '>
                                {
                                    skilstwo.map((val, ind) => (
                                        <div key={ind} className='  text-[#a9adb8] my-6 md:my-6 mx-4'>
                                            <div className=' flex justify-between'>
                                                <h2 className=' text-2xl font-serif'>{val.skil}</h2>
                                                <h2 className=' text-2xl font-serif'>{val.percent}%</h2>
                                            </div>
                                            <div className=' bg-lime-50 h-2 w-full rounded-full'>
                                                <div className={` bg-orange-400 h-2   rounded-full`} style={{ width: `${val.percent}%` }}></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
