import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll';

const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    const changeToggle = () => {
        setToggle(!toggle)
    }
   
    return (


        <div>
            <div className='flex justify-end md:justify-center items-center text-gray-300  w-full
   bg-gradient-to-l from-blue-500 to-black fixed h-36'>
                <div>
                    <ul className=' hidden md:flex space-x-16 text-2xl font-mono '>
                        <li className='uppercase  duration-200 cursor-pointer  hover:scale-105'><Link to = "home" smooth duration={400}>Home</Link></li>
                        <li className='uppercase  duration-200  cursor-pointer hover:scale-105'><Link to = "about" smooth duration={500}>About</Link></li>
                        <li className='uppercase  duration-200  cursor-pointer hover:scale-105'><Link to = "Projects" smooth duration={500}>Projects</Link></li>
                        <li className='uppercase  duration-200  cursor-pointer hover:scale-105'><Link to = "experience" smooth duration={500}>Experience</Link></li>
                        <li className='uppercase  duration-200  cursor-pointer hover:scale-105'><Link to = "Links" smooth duration={500}>Links</Link></li>
                    </ul>
                    <div className='hamburger' onClick={changeToggle} >
                        {toggle ? <FaBars /> : <FaTimes />}
                    </div>
                </div>
                <div>
                </div>
            </div>



            {toggle?null:
            <div  id="mobileNav" className='flex justify-center md:justify-center items-center text-gray-300  w-full
            bg-gradient-to-l from-blue-500 to-black  fixed h-full mt-36'>
                         <div>
                             <ul className=' md:flex text-2xl font-mono mb-48  '>
                                 <li className='uppercase pb-8 duration-200 cursor-pointer  hover:scale-105'><Link to="home" smooth duration={500}>Home</Link></li>
                                 <li className='uppercase pb-8 duration-200  cursor-pointer hover:scale-105'><Link to= "about" smooth duration={500}>About</Link></li>
                                 <li className='uppercase pb-8 duration-200  cursor-pointer hover:scale-105'><Link to= "projects" smooth duration={500}>Projects</Link></li>
                                 <li className='uppercase pb-8 duration-200  cursor-pointer hover:scale-105'><Link to="experience" smooth duration={500}>Experience</Link></li>
                                 <li className='uppercase pb-8 duration-200  cursor-pointer hover:scale-105'><Link to="links" smooth duration={500}>Links</Link></li>
                             </ul>
                         </div>
                         <div>
                         </div>
                     </div>
            }
            


        </div >



    )
}

export default Navbar