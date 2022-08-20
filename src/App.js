import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} /> 
        <Route path='/servicos' element={<Services />} />
        <Route path='/blog/*' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App