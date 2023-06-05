import React from 'react'
import { GlobalProvider } from '../Context/GlobalState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Men from '../Pages/Men/Men'
import Women from '../Pages/Women/Women'
import Contact from '../Pages/Contact/Contact'

const AppRouter = () => {
  return (
    <>
        <GlobalProvider>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/men' element={<Men/>}/>
                    <Route path='/women' element={<Women/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </GlobalProvider>
    </>
  )
}

export default AppRouter