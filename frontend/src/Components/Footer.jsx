import React from 'react'

import { Link } from 'react-router-dom'

export const Footer = () => {
    // <img src="https://i.ibb.co/c1Tm3Jm/footer.jpg" alt="footer" border="0"></img>
    return (
        <>
            <div className="footer w-full min-h-[30vh] h-fit bg-cover">
                <div className="back-image absolute h-[30vh] w-full -z-20">
                    <img className='w-full h-full bg-cover bg-center object-cover' src="https://i.ibb.co/c1Tm3Jm/footer.jpg" alt="footer" border="0" />
                </div>
                <div className="shaddow absolute h-[30vh] w-full bg-black opacity-[0.8] slate-700 -z-10" >
                </div>
                <div className="relative flex flex-col h-full max-w-[90%] items-center justify-center ">
                    <div className="diseases flex flex-row flex-wrap gap-[6vw] text-white underline-offset-4">
                        <Link>disease1</Link>
                        <Link>disease2</Link>
                        <Link>disease1</Link>
                        <Link>disease2</Link>
                        <Link>disease1</Link>
                        <Link>disease2</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
