import { Container } from 'react-bootstrap';
import {  Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
const HomePage = () => {
  const img="https://wwd.com/wp-content/uploads/2021/12/Tiffany-Boston-Copley-0033.jpg";
  return (
    <Container>
      <center>
      <div id="banner">
                <div className="container header-txt">
                    <h2 id="main-txt">Inspired Adornment</h2><br/>
                    <h5 id="subhead">Adorn yourself with our custom jewelry.</h5>
                    <div className="row">
                      <center>
                      <img src={img} alt="" width={800} />
                      </center>
                      <h2>
                    <Nav.Link  as ={Link} to="/Jewelry">Shop Now</Nav.Link>
                    </h2></div>
                </div>
            </div>
      </center>
    </Container>
  );
};
export default HomePage;