import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import HomePage from "./Components/HomePage";
import Jewerlymanger from "./Components/manger/Jewerlymanger";
import Add from "./Components/manger/Add";
import JewerlysManger from "./Components/manger/JewerlysManger";
import About from "./Components/About";
import Session from "./Components/Session";
import Login from "./Components/login/Login";
import Register from "./Components/Register/Register";
import Loginmanger from "./Components/manger/Loginmanger";
import Products from "./Components/Shopping/Products";
import Cart from "./Components/Shopping/Cart";
function App() {
  return (
    <Router>
      <Navbar  expand="lg"  >
        <Navbar.Brand as={Link} to="/" style={{ color:"#c6add8f0",margin:"10px" }}>
         Jewelry 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color:"#8c8a8cf0"}}>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Login">
             Login
            </Nav.Link>
            

            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            
            <Nav.Link as={Link} to="/Products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/Session">
              session
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Loginmanger" element={<Loginmanger />} />
        <Route path="/About" element={<About />} />
        <Route path="/JewerlysManger" element={<JewerlysManger />} />
        <Route path="/JewerlysManger/add" element={<Add />} />
        <Route path="/Jewerlymanger/:jewerlymangerId" element={<Jewerlymanger />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
         <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/Session" element={<Session />} />
      
     
    </Routes>
        </Router>
  );
}

export default App;