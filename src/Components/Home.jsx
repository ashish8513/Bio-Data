import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
import Ashish from "../assets/1684768999057-01.jpeg"


function Home() {

    return (
        <>
            <div name='Home' className='max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>

                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1'>
                        <span>Welcome to ashish world</span>
                        <div className='flex space-x-2 text-2xl md:text-3xl'>

                            <h1>Hello I'm a</h1>
                            {/* <span className='text-red-600 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-600 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <p className='text-sm md:text-2xl text-justify'>Begin your coding adventure in our community, where learning is always appreciated and valued.</p>
                        <br />
                        <div className='space-y-2'>
                            <h1 className='font-bold text-3xl'>Currently Working On </h1>
                            <ul className='flex space-x-6 pt-5'>
                                <li>
                                    {""}

                                    <SiMongodb className='md:text-5xl text-5xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer' />
                                </li>
                                <li>
                                    {""}

                                    <SiExpress className='md:text-5xl  text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                </li>
                                <li>
                                    {""}

                                    <FaReact className='md:text-5xl text-5xl  hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                </li>
                                <li>
                                    {""}
                                    <FaNodeJs className='md:text-5xl  text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-64 md:mt-10 mt-8 order-1'>
                        <img src={Ashish} className='md:h-[400px] rounded-full md:w-[400px]' alt="" />
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default Home
