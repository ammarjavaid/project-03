import React from 'react'
import About from '../about/About'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Counter from '../counter/Counter'
import Portfolio from '../portfolio/Portfolio'
import Services from '../services/Services'
import Testimonials from '../testimonials/Testimonials'
import Hero from './Hero'

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
    </>
  )
}
