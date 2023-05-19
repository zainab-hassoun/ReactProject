import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
 import HomePage from "./Components/HomePage";
// import Jewelry from "./Components/Shopping/Jewelry";
// import Add from "./Components/manger/Add";

import About from "./Components/About";
import Session from "./Components/Session";
import Login from "./Components/login/Login";
// import Shoee from "./Components/manger/Shoee";
// import Cart  from "./Components/Shopping/Cart";
import Register from "./Components/Register/Register";
function App() {
  return (
    <Router>
      <Navbar  expand="lg"  >
        <Navbar.Brand as={Link} to="/">
         Jewelry 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            {/* <Nav.Link as={Link} to="/Jewelry">
              Jewelry Products
            </Nav.Link>
            <Nav.Link as={Link} to="/Jewelry/add">
              Add Product
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="shoee">
              Edit
            </Nav.Link> */}
            <Nav.Link as={Link} to="/Session">
              session
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
            <i className="bi bi-cart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Shoee" element={<Shoee />} /> */}
        <Route path="/Session" element={<Session />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Route path="/Jewelry" element={<Jewelry />} />
        <Route path="/Jewelry/add" element={<Add />} />
        <Route path="/Jewelry/:JewelryId" element={<Jewelry />} /> */}
      </Routes>
    </Router>
  );
}

export default App;