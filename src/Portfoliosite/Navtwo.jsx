import React from 'react'

export default function Navtwo({updateShow}) {
    
    const navicon=[
        {name:'All'},
        {name:'Business Web'},
        {name:'Blogs'},
        {name:'E-commerce'}
    ]
    return (
        <>

            <div className=' shadow-lg shadow-orange-500/40 bg-[#6b8ac83a]'>
                <div className='w-full md:w-[60%] mx-auto'>   
                        <div className='flex justify-center items-center'>
                            <div className='flex gap-3'>
                                {
                                    navicon.map((item,ind)=>(
                                        <div key={ind} onClick={()=>updateShow(item.name)} className='text-[#a9adb8] p-2 cursor-pointer hover:bg-orange-300 hover:text-black duration-300 rounded '>
                                            <span>{item.name}</span>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    
                </div>
            </div>

        </>
    )
}
