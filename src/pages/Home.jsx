
import Navigation from "../component/Navigation";
import About from "../component/About"
 import Carosal from "../component/Carosal";
import Footer from "../component/Footer";
import Service from "../component/Service";
import Contact from "../component/Contact";
function Home() {
    return(
        <div>          
           <Navigation />           
            <Carosal /> 
            <About />
            <Service />
            <Contact />
           <Footer /> 
        </div>
    )
}

export default Home;