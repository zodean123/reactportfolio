import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
const Links = () => {
    return (
        <div className='bg-gradient-to-l  from-black via-black to-gray-800 flex justify-center items-center  flex-col md:flex-row  sm:flex-row  '>
            <div className='p-4'>
                <button className=" flex flex-row p-4 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0))] text-black text-lg bg-gray-300 ease-out hover:translate-y-1 transition-all rounded">
                    <a href="https://www.linkedin.com/in/dipan-mallick-25b28a242/" target="_blank" rel="noreferrer" className='flex'>LinkedIn<span className='px-4'><FaLinkedin size={30} /></span></a>
                </button>
            </div>
            <div className='p-4'>
                <button className=" flex flex-row p-4 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black text-lg bg-gray-300 ease-out hover:translate-y-1 transition-all rounded">
                    <a href="https://github.com/zodean123" target="_blank" rel="noreferrer" className='flex'>GitHub<span className='px-4'><FaGithub size={30} /></span></a>
                </button>
            </div>
            <div className='p-4'>
                <button className=" flex flex-row p-4 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black text-lg bg-gray-300 ease-out hover:translate-y-1 transition-all rounded">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer" className='flex'>GitHub<span className='px-4'><HiOutlineMail size={30} /></span></a>
                </button>
            </div>
            </div>
    )
}

export default Links