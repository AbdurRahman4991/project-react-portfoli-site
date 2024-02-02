
//import Nav from "./component/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"

function App() {
  

  return (
    <div>
 {/* <Nav /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </BrowserRouter>
     
      
    </div>
   
  )
}

export default App
