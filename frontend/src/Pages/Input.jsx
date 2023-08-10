import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Input1 } from '../Components/Input1'
import { Diabetes } from '../Components/Diabetes'
import { Heart } from '../Components/Heart'
import { Kidney } from '../Components/Kidney'

export const Input = ({ path }) => {
    return (
        <>
            <Navbar />
            {
                (path === "liver")
                    ? (<Input1 />)
                    : ((path === "diabetes")
                        ?
                        <Diabetes />
                        : ((path === "heart")
                            ?
                            <Heart />
                            : ((path === "kidney")
                                ?
                                <Kidney />
                                : <></>
                            )
                        )
                    )
            }

            <Footer />
        </>
    )
}
