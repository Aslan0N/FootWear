import React from 'react'
import { GlobalProvider } from '../Context/GlobalState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Header from '../Common/Header'

const AppRouter = () => {
  return (
    <>
        <GlobalProvider>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    </>
  )
}

export default AppRouter