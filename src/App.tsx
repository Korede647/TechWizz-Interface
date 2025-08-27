
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import UserDashboard from "./User Dashboard/UserDashboard";
import Gallery from "./pages/Gallery/Gallery";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path = "/user-Dashboard56" element = {<UserDashboard/>}/>
        < Route path="/gallery" element={<Gallery />} />
        < Route path="*" element={<Homepage />} />
      </Routes>
      <Footer/>
    </Router>
  );


}

export default App;

