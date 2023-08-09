import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { Overview } from '../Components/Overview'
import { Card } from '../Components/Card'
import { Footer } from '../Components/Footer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Overview />
            <Card />
            <Footer />
        </>
    )
}
