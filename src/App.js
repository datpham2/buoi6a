import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Hook1 from './components/hook/Hook1'
import Hook2 from './components/hook/Hook2'
import Hook3 from './components/hook/Hook3'
import Hook4 from './components/hook/Hook4'
import NotFound from './components/hook/NotFound'
import Footer from './components/footer/Footer'
import React from 'react'

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Hook1 />} />
            <Route path='/product' element={<Hook2 />} />
            <Route path='product/:id' element={<Hook2 />} />
            <Route path='/price' element={<Hook3 />} />
            <Route path='/contact' element={<Hook4 />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
