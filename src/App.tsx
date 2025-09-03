
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/About/AboutUs";
import ContactUs from "./Pages/Contact/ContactUs";
import UserDashboard from "./User Dashboard/UserDashboard";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Homepage/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<Homepage />} />
        < Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};




export default App;

