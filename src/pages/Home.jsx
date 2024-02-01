
import Nav from "../component/Nav";
import About from "../component/About"
import Carosal from "../component/Carosal";
import Footer from "../component/Footer";
import Service from "../component/Service";
import Contact from "../component/Contact";
function Home() {
    return(
        <div>
           <Nav />           
            <Carosal />
            <About />
            <Service />
            <Contact />
           <Footer />
        </div>
    )
}

export default Home;