import React from 'react'
import mongoDb from '../assets/mongodb.jpg'
import express from '../assets/express.png'
import react from '../assets/react.svg'
import node from '../assets/node.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/java.png'

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDb,
            name: 'MongoDB',
            description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program.'
        }, ,
        {
            id: 2,
            logo: express,
            name: 'expressJs',
            description: 'Express is a node js web application framework that provides broad features for building web and mobile applications. ',
        },
        {
            id: 3,
            logo: react,
            name: 'reactJs',
            description: 'React provides reusability of components, fast rendering, code stability, high performance, and extensive .'
        },
        {
            id: 4,
            logo: node,
            name: 'nodeJs',
            description: 'It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers.'
        },
        {
            id: 5,
            logo: JavaScript,
            name: 'JavaScript',
            description: 'JavaScript is a programming language used to create dynamic content for websites. '
        },
        {
            id: 6,
            logo: Java,
            name: 'Java',
            description: 'Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.'
        }
    ]
    return (
        <>
            <div name='Portfolio' className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold '>Project</span>
                <div className='grid grid-cols-1 md:grid-cols-3 space-y-4 my-5 gap-4'>
                    {
                        cardItem.map(({ id, logo, name, description }) => (
                            <div className=' dark:bg-slate-900 dark:text-white bg-white md:w-[330px] md:h-[370px] border-[2px] rounded-lg shadow-[0_0_10px_black] p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                                <img className='w-[120px] h[120px] p-1 rounded-full border-[2px]' src={logo} alt="" />
                                <div>
                                    <div className=' px-2 font-bold text-lg mb-2'>{name}</div>
                                    <p className='dark:bg-slate-900 dark:text-white px-2 text-gray-700'>{description}</p>
                                </div>
                                <div className=' px-6 py-4 space-x-3 justify-around'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Portfolio
