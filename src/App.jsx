// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Components/Frontend/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Signup from './Components/Frontend/Singup'
import Signin from './Components/Frontend/signin'
import "../public/assets/style.scss"
import Otp from './Components/Otp'
import Verification from './Components/Frontend/Verification'
import Subscriptionplan from './Components/Frontend/Subscriptionplan'
import Payment from './Components/Frontend/Payment'
import Add_Stripe_card from './Components/Frontend/Add_Stripe_card'
import Payment_confirm from './Components/Frontend/Payment_confirm'
import Payment_successfull from './Components/Frontend/payment_successfull'
import Login_inner from './Components/Frontend/login_inner'


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/otp-verified" element={<Verification/>}/>
        <Route path="/subplans" element={<Subscriptionplan/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/stripe-card" element={<Add_Stripe_card/>}/>
        <Route path="/payment-confirm" element={<Payment_confirm/>}/>
        <Route path="/payment-success" element={<Payment_successfull/>}/>
        <Route path="/login-inner" element={<Login_inner/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
