import React from 'react'

export default function Animatedtext({text}) {
    const newText = text.toLowerCase().replace(/\s+/g, '');
    return (
        <>
            <div className={` flex justify-center text-center mt-20 main ${newText}`}>
                <div className=' about '>
                    <h1 className='text-lime-50  h-max overflow-y-hidden font-serif'>{text}</h1>
                </div>
            </div>

        </>
    )
}
