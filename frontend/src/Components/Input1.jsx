import React from 'react'

export const Input1 = () => {
    return (
        <>
            <div className="container flex w-full flex-col items-center justify-center pt-[120px]">
                <div className='flex flex-col w-[70vw]'>
                    <div className="heading  text-3xl md:text-6xl capitalize w-fit">
                        Input for Liver Disease
                        <br />
                        <hr className=' border-solid border-[0.2vw] border-[#3A8F99] w-[70%] mt-[0.5vw]' />
                    </div>
                    <div className="container flex flex-row flex-wrap mt-[5vw] w-full pb-[5vh]">
                        <form className="form w-full lg:w-[70%] flex flex-col lg:gap-5 gap-3">
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Age Of The Patient</p>
                                <input type="number" min={0} max={150} name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>

                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Gender of The Patient</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Total Bilirubin</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Direct Bilirubin</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Alkphos Alkaline Phosphotase</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Sgpt Alamine Aminotransferase</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Sgot Aspartate Aminotransferase</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Total Protiens</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>ALB Albumin</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] capitalize'>Albumin and Globulin Ratio [A/G RATIO]</p>
                                <input type="text" name="age" autoComplete="age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="submit w-full flex justify-center">
                                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[50%]">
                                    Predict Now
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

