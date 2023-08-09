import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { Overview } from '../Components/Overview'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Overview />
        </>
    )
}
