import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/nadoexqb", userInfo)
            toast.success("message has been sent successfully")
        } catch (error) {
            console.log(error)
            toast.error("message has not been sent")
        }
    }

    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/nadoexqb"
                        // method="POST"
                        className='bg-slate-200 px-8 py-6 rounded-xl w-96'>
                        <h1 className='text-3xl font-semibold '>Send your message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='text-gray-700 block' htmlFor="name">Full Name</label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                name='name'
                                placeholder='Enter your Full Name'
                            />
                            {errors.name && <span className='text-red-500 font-semibold'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-gray-700 block' htmlFor="name">Email:-</label>
                            <input
                                {...register("email", { required: true })}
                                type="text"
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                name='email'
                                placeholder='Enter your Email Address'
                            />
                            {errors.email && <span className='text-red-500 font-semibold'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-gray-700 block' htmlFor="name">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                rows={5}
                                cols={30}
                                type="text"
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='message'
                                name='message'
                                placeholder='Message'
                            />
                            {errors.message && <span className='text-red-500 font-semibold'>This field is required</span>}
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 cursor-pointer hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
