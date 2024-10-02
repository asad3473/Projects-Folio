import React, { useState } from 'react'
import Animatedtext from './Animatedtext'
import Navtwo from './Navtwo'
import Allprojects from './Allprojects'
import Businesweb from './Businesweb'
import Blogs from './Blogs'
import Ecommerce from './Ecommerce'

export default function Projects() {
  const [show, setShow] = useState("All")
  const updateShow = (value) => {
    setShow(value)

  }


  return (
    <>
      <div id='projects'>
        <Animatedtext text='Projects' />
        <Navtwo updateShow={ updateShow } />
        {
        show === "All" ? <Allprojects /> : show === "Business Web" ? <Businesweb /> : show === "Blogs" ?<Blogs /> :<Ecommerce />
        }

      </div>

    </>
  )
}
