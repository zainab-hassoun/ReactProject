import { Container } from 'react-bootstrap';
import {  Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Home.css";
const HomePage = () => {
  const img="https://bnsec.bluenile.com/bluenile/is/image/bluenile/2023Q1-JSP-hero-desktop?$alloy_default$&wid=1944&hei=986&crop=1113,724,2965,1504&fmt=webp" ;
  return (
    <Container>
      
      <div id="banner">
                <div className="container header-txt">
                   
                    <center>
                    <h3 id="subhead" >Adorn yourself with our custom jewelry</h3>
                  
                    <br/><br/>
                      <img src={img} width={1160} height={400}/>
                      <br/><br/>
                      <h3>
                    <Nav.Link  as ={Link} to="/Jewelry">Shop Now</Nav.Link>
                    </h3>
                 </center>
      </div><br/><br/>
      <div class="flex-container">
        <div class="design-item">
          <div class="design-img">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/1233/9260/files/Two_Tones_Collection_mobile_2.jpg?v=1666281114"
                width="260"
                height="260"
              />
            </div>
            <span>Ring</span>
          </div>
        </div>
        <div class="design-item">
          <div class="design-img">
            <div>
              <img
                src="https://www.dhresource.com/0x0/f2/albu/g20/M00/6A/05/rBVaqWDez9-Aata4AADOo3W3RyU758.jpg"
                width="260"
                height="260"
              />
            </div>
            <span>Necklace</span>
          </div>
        </div>
        <div class="design-item">
          <div class="design-img">
            <div>
              <img
                src="https://i.etsystatic.com/27043619/r/il/e2d1cc/2788815866/il_570xN.2788815866_hzy7.jpg"
                width="260"
                height="260"
              />
            </div>
            <span>Earing</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
};
export default HomePage;