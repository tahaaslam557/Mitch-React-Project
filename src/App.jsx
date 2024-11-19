// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Components/Frontend/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Signup from './Components/Frontend/Singup'
import Signin from './Components/Frontend/signin'
import "../public/assets/style.scss"


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
