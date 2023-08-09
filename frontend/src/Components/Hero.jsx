import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

export const Hero = () => {
    // const style1 = {
    //     'backgroundImage': 'url("https://i.ibb.co/PZ0QYh5/Hero-image.jpg")',
    // }
    return (
        <>
            <div className='h-[60vh] md:h-[100vh] w-full '>
                <div className="w-full h-[60vh] md:h-[100vh] absolute -z-10">
                    <img src="https://i.ibb.co/PZ0QYh5/Hero-image.jpg" alt="IntroImg" className="w-full h-full bg-cover bg-center object-cover" />
                </div>

                <div className='w-full h-full relative flex flex-col items-center justify-center pt-[4rem]'>
                    <div className='w-fit max-w-[90%]'>
                        <h1 className=" text-white text-xl sm:text-3xl md:text-5xl  lg:text-7xl leading-[3rem] md:leading-[5.9rem] tracking-[0.16rem] font-thin">
                            Protect Your Health And Keep
                            <br />
                            Your Immune to Stay
                            <br />
                            Healthy
                        </h1>
                        <p className='text-white text-sm md:text-lg md:leading-10 tracking-[0.1rem] lowercase'>
                            We will help you in maintaining your health here we choose you a doctor who is
                            <br />
                            experienced and certified in his field
                        </p>
                        <div className="buttons mt-10 md:mt-24 w-full flex flex-row justify-center">
                            <div className=' border-white p-2 cursor-pointer hover:bg-[#ffffff66] border-solid text-white border-2 flex flex-row gap-2 hover:gap-4 hover:-translate-y-1 hover:scale-110 duration-300'>
                                Explore Technologies
                                <div className=' flex items-center'>
                                    <BsArrowRight />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}
