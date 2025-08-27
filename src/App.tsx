
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage/Homepage";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* catch-all route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
              {/* <UserDashboard /> */}
      {/* <Gallery/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );


    </>
  )
}

export default App;

