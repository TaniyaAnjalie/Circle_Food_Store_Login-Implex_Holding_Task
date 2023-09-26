import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const Routers = () => {
  return (
    <Routes>

            <Route path="/" element={<Navigate to= "/login"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/> 
            

    </Routes>
  )
}

export default Routers
