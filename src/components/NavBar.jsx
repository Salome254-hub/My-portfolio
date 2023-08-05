import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const links=[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    }
   

  ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
        <h1 className="text-5xl font-signature ml-2">Sally</h1>
      </div> 
        <ul className='hidden md:flex'>

          {links.map(({id, link })=>( 
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-grey-800 hover:scale-105 duration-200'>
            {link}
            </li>))}

            <div className='cursor-pointer pr-4 z-10 text-gray-500'>
              <FaBars size={30}/>
            </div>
           
            
        </ul>
    </div>
  )
}

export default NavBar