import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import ForgotPassword from "./pages/forgot-password/ForgotPassword"
import Homepage from "./pages/Homepage/Homepage"
import Gallery from "./pages/Gallery/Gallery"
import UserDashboard from "./User Dashboard/UserDashboard"

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path="/userDashboard20" element={<UserDashboard/>} />
        </Routes> 
    </Router>
    </>
  )
}

export default App;

