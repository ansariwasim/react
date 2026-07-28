import './App.css'
import Navbar from './component/Navbar.jsx'
import {Routes, Route} from "react-router";
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Service from './component/Service.jsx';
import Home from './component/Home.jsx'


function App() {


  return (
    <>
  
      <Navbar></Navbar>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/service" element={<Service/>} />



       </Routes>

    </>
  )
}

export default App
