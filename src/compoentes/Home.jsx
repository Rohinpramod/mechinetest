import React from 'react'
import Navbar from './Nabvar'
import Hero from './Hero'
import About from './About'
import WorkoutPrograms from './WorkoutPrograms'
import Trainer from './Trainer'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <WorkoutPrograms />
        <Trainer />
        <Contact />
        <Footer />
        
    </div>
  )
}

export default Home