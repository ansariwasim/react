import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail"
import Product from "./pages/Product";
import Navbar2 from "./component/Navbar2";

import Men from "./pages/Men";
import Women from "./pages/Women";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen bg-black text-white">
        <Navbar />
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Route>
            <Route path='/course/:id' element={<CourseDetail />} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
