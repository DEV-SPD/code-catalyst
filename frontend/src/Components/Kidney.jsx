

import React from 'react'

export const Kidney = () => {
    return (
        <>
            <div className="container flex w-full flex-col items-center justify-center pt-[120px]">
                <div className='flex flex-col w-[70vw]'>
                    <div className="heading  text-3xl md:text-6xl  w-fit">
                        Input for Kidney Disease
                        <br />
                        <hr className=' border-solid border-[0.2vw] border-[#3A8F99] w-[70%] mt-[0.5vw]' />
                    </div>
                    <div className="container flex flex-row flex-wrap mt-[5vw] w-full pb-[5vh]">
                        <form className="form w-full lg:w-[70%] flex flex-col lg:gap-5 gap-3">
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Age Of The Patient</p>
                                <input type="number" name="age" min={0} max={150} autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>


                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Gender of The Patient</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Blood Pressure in mm/Hg
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Specific Gravity</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>1.005</option>
                                    <option>1.010</option>
                                    <option>1.015</option>
                                    <option>1.020</option>
                                    <option>1.025</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Albumin</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Sugar</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Red Blood Cells</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Normal</option>
                                    <option>Abnormal</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pus Cell</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Normal</option>
                                    <option>Abnormal</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pus Cell Clumps</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Present</option>
                                    <option>Not Present</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Bacteria</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Present</option>
                                    <option>Not Present</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%]'>Blood Glucose Random in mgs/dl
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%]'>Blood Urea in mgs/dl
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Serum Creatinine in mgs/dl
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Sodium in mEq/L
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Potassium in mEq/L
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Hemoglobin in gms
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Packed Cell Volume
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>White Blood Cell Count in cells/cumm
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Red Blood Cell Count in millions/cmm
                                </p>
                                <input type="text" name="age" autoComplete="given-age" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3A8F99] sm:text-sm sm:leading-6 ps-2" />
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Hypertension</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Diabetes Mellitus</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Coronary Artery Disease</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Appetite</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Good</option>
                                    <option>Poor</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Pedal Edema</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Anemia</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="field flex flex-wrap gap-3 lg:gap-0">
                                <p className='w-full lg:w-[50%] '>Class</p>
                                <select name="gender" autoComplete="country-name" className="block lg:w-[50%] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>ckd</option>
                                    <option>notckd</option>
                                </select>
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
