// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
// import Gallery from "./pages/Gallery/Gallery"
// import UserDashboard from "./User Dashboard/UserDashboard"

function App() {
  return (
    <>
      {/* <UserDashboard /> */}
      {/* <Gallery/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes> 
    </>
  )
}

export default App
