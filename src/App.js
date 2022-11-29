import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Services from './pages/services/Services'
import Testimonials from './pages/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App