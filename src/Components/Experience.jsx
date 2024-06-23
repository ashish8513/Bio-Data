import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.jpg'
import JavaScript from '../assets/reactjs.png'
import Oracle from '../assets/oracle.png'
import Spring from '../assets/spring.png'
import SpringBot from '../assets/springBoot.jpg'

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: Html,
            name: 'Html',
        }, ,
        {
            id: 2,
            logo: Css,
            name: 'Css',
        },
        {
            id: 3,
            logo: JavaScript,
            name: 'JavaScript',
        },
        {
            id: 4,
            logo: Oracle,
            name: 'Oracle',
        },
        {
            id: 5,
            logo: SpringBot,
            name: 'SpringBot',
        },
        {
            id: 6,
            logo: Spring,
            name: 'Spring',
        }
    ]
    return (
        <>
            <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <span className='underline font-semibold '>I've more than 2 yeats of experience in below technologies</span>
                <div className='grid grid-cols-2 md:grid-cols-3 space-y-4 my-3 gap-7'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className=' flex flex-col items-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-[0_0_10px_black] p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                                <img className='w-[150px]  p-1 border-[2px] rounded-full' src={logo} alt="" />
                                <div>
                                    <div className=' px-2 '>{name}</div>
                                </div>
                               
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Experience
