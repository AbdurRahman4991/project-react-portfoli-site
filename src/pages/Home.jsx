
import Nav from "../component/Nav";
import About from "../component/About"
import Carosal from "../component/Carosal";
import Footer from "../component/Footer";
function Home() {
    return(
        <div>
           <Nav />           
            <Carosal />
            <About />
           <Footer />
        </div>
    )
}

export default Home;