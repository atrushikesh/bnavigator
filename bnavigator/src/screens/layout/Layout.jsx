import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Start,Login, Select_view, Test, Otp, Home_sc, Switch_window, My_Ride, Route_sc,Settings_sc, Route_2_sc, Wallet } from '../../screens'


const Layout = () => {
  return (
    <>
    <Routes>
        <Route index element={<Start/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Select-view' element={<Select_view/>} />
        <Route path='/Test' element={<Test/>} />
        <Route path="/get-OTP" element={<Otp/>} />
        <Route path="/Home" element={<Home_sc/>} />
        <Route path="/app" element={<Switch_window/>} />
        <Route path="/Home-sc" element={<Home_sc/>} />
        <Route path="/My-Ride" element={<My_Ride/>} />
        <Route path="/Route" element={<Route_sc/>} />
        <Route path="/Settings" element={<Settings_sc/>} />
        <Route path="/Route-destination" element={<Route_2_sc /> } />
        <Route path="/Wallet" element={<Wallet /> } />
    </Routes>
    </>
  )
}

export default Layout
