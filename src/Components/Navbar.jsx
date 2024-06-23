import React, { useState } from 'react'
import ashish from '../assets/am.png'
import { RiMenu2Line } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-scroll';
function Navbar() {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 1,
            text: "About"
        },
        {
            id: 1,
            text: "Portfolio"
        },
        {
            id: 1,
            text: "Experience"
        },
        {
            id: 1,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl bg-white container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2 '>
                        <img src={ashish} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Ashish<span className='text-green-500 text-xl'>Prabhakar</span>
                            <p className='text-sm'>Mern Stack Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div >
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-300 cursor-pointer' key={id}> <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ?
                                <RxCrossCircled size={24} /> : <RiMenu2Line size={24} />
                            }
                        </div>
                    </div>
                </div>
                {/* mobile navbarRxCrossCircled RiMenu2Line */}
                {
                    menu &&
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-5 font-bold '>
                        {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 font-semibold  duration-300 cursor-pointer' key={id}><Link to={text} onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar
