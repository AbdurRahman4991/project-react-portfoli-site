
//import Nav from "./component/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import ToDo from "./pages/ToDo"

function App() {
  

  return (
    <div>
 {/* <Nav /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title='Home' />} />      
        <Route path="/about" element={<About title='About' />} />
        <Route path="/service" element={<Service title='Service' />} />
        <Route path="/contact" element={<Contact title='Contact' />} />
        <Route path="/blog" element={<Blog  title='Blog'/>} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
      </BrowserRouter>
     
      
    </div>
   
  )
}

export default App
