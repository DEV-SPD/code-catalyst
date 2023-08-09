import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Input1 } from '../Components/Input1'
import { Diabetes } from '../Components/Diabetes'

export const Input = ({ path }) => {
    return (
        <>
            <Navbar />
            {
                (path === "heart")
                    ? (<Input1 />)
                    : ((path === "diabetes")
                        ?
                        <Diabetes />
                        : <> </>
                    )
            }

            <Footer />
        </>
    )
}
