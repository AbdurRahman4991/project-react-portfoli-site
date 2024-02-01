import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <Container className="mt-5">
            <div className="jumbotron">
  <h3 className="text-center" >React Developer</h3>
  <p className="text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
 This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4" />
  
    <center><Link className="btn btn-primary btn-lg  " to="#" role="button">Google</Link> <a className="btn btn-primary btn-lg  " href="#" role="button">Twiter</a> <a className="btn btn-primary btn-lg  " href="#" role="button">Facebook</a></center>
 
</div>
            </Container>
        </div>
    );
}

export default Footer;