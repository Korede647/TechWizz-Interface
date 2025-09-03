import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Pages/login/Login"
import Signup from "./Pages/signup/Signup"
import ForgotPassword from "./Pages/forgot-password/ForgotPassword"
import Homepage from "./Pages/Homepage/Homepage"
import Gallery from "./Pages/Gallery/Gallery"
import UserDashboard from "./User Dashboard/UserDashboard"

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path="/userDashboard20" element={<UserDashboard/>} />
        </Routes> 
    </Router>
    </>
  )
}

export default App;

