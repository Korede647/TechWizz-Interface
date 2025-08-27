
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import UserDashboard from "./User Dashboard/UserDashboard";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path = "/user-Dashboard56" element = {<UserDashboard/>}/>
        < Route path="/gallery" element={<Gallery />} />
        < Route path="*" element={<Homepage />} />
      </Routes>
      <Footer/>
    </Router>
  );


}

export default App;

