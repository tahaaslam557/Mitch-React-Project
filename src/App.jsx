// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Components/Frontend/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import Signup from "./Components/Frontend/Signup";
import SignIn from "./Components/Frontend/Signin";
import "../public/assets/style.scss";
import Otp from "./Components/Frontend/Otp";
import Verification from "./Components/Frontend/Verification";
import Subscriptionplan from "./Components/Frontend/Subscriptionplan";
import Payment from "./Components/Frontend/Payment";
import Add_Stripe_card from "./Components/Frontend/Add_Stripe_card";
import Payment_confirm from "./Components/Frontend/Payment_confirm"; 
import Payment_successfull from "./Components/Frontend/Payment_successfull";
import Login_inner from "./Components/Frontend/Login_inner";
import Storypreview from "./Components/Frontend/Storypreview";
import Generated from "./Components/Frontend/Generated";
import History from "./Components/Frontend/History";
import User_Tips from "./Components/Frontend/User_Tips";
import Account from "./Components/Frontend/Account";

export default function App() {
  return (
    <Router> {/* Use HashRouter here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/otp-verified" element={<Verification />} />
        <Route path="/subplans" element={<Subscriptionplan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/stripe-card" element={<Add_Stripe_card />} />
        <Route path="/payment-confirm" element={<Payment_confirm />} />
        <Route path="/payment-success" element={<Payment_successfull />} />
        <Route path="/login-inner" element={<Login_inner />} />
        <Route path="/preview" element={<Storypreview />} />
        <Route path="/generated" element={<Generated />} />
        <Route path="/history" element={<History />} />
        <Route path="/tips" element={<User_Tips />} />
        <Route path="/account" element={<Account />} />
        {/* 404 Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}