import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";




const App = () => {
  return (
    <div className="">
    <section className='flex flex-col justify-between items-center'>
   
     <BrowserRouter> 
     <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </BrowserRouter>

  </section>
  
  </div>
  )
}

export default App;
