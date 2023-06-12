import { useParams } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { updateCart } from "../../api/api";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
 
export const CartContext = createContext();
 
const api = axios.create({
  baseURL: "http://localhost:3006",
});
const API = "http://localhost:3006";
 
const Cart = (props) => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchCart();
  }, []);
 
  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API}/Cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
 
  const addToCart = async (id) => {
    try {
      const response = await axios.post(`${API}/Cart/${id}`);
      console.log(response.data);
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
 
  const deleteFromCart = async (id) => {
    try {
      const response = await api.delete(`/Cart/${id}`);
      fetchCart();
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };
 
  
const updateProductQuantity = async () => {
  try {
    const updatePromises = cart.map(async (item) => {
      await updateCart(item.id, item.amount, item.name);
    });
 
    await Promise.all(updatePromises);
 
    // Remove all cart items from the JSON
    const deletePromises = cart.map(async (item) => {
      await api.delete(`/Cart/${item.id}`);
    });
    await Promise.all(deletePromises);
 
    // Clear the cart from the state or wherever it is stored
    clearCart(); // Assuming you have a function to clear the cart
 
    navigate("/Products");
  } catch (error) {
    console.error("Failed to update product quantity:", error);
  }
};
 

  
 
  const calculateProductTotalPrice = (price, amount) => {
    return Number(price) * amount;
  };
 
  const Eidjew = async (Id, Name, ImgUrl, Price, Amount) => {
    if (Amount === 0) {
      deleteFromCart(Id);
    } else {
      const Jewerly = {
        id: Id,
        name: Name,
        imgUrl: ImgUrl,
        price: Price,
        amount: Amount,
      };
 
      const response = await api.put(`/Cart/${Id}`, Jewerly);
      console.log(response.data);
    }
  };
 
  const PriceTotal = (PriceT) => {
    let sum = 0;
    PriceT.map((jewelry) => {
      sum += Number(jewelry.price) * jewelry.amount;
    });
    return sum;
  };
 
  return (
    <div>
      <center>
        <h1 style={{ color: "#8c8a8cf0" }}>Shopping Cart</h1>
      </center>
      <Row xs={1} sm={2} md={4} className="mb-4" style={{ padding: "15px" }}>
        {cart.map((item) => (
          <Col key={item.id} className="mb-4" style={{ margin: "15px" }}>
            <Card.Img
              variant="top"
              src={item.imgUrl}
              style={{ width: "600", height: "300", objectFit: "cover" }}
            />
            <Card.Body>
              <br />
              <Card.Title style={{ color: "#8c8a8cf0" }}>{item.name}</Card.Title>
              <br />
              <Card.Text style={{ color: "#8c8a8cf0" }}>{item.price}$</Card.Text>
              <br />
            </Card.Body>
            <div className="mt-3">
              <button className="button-55" onClick={() => deleteFromCart(item.id)}>
                Delete jewelry
              </button>
              <br />
              <br />
              <div className="mt-3" style={{ display: "flex", alignItems: "center" }}>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => Eidjew(item.id, item.name, item.imgUrl, item.price, item.amount - 1)}
                >
                  -
                </button>
                <Card.Text style={{ color: "#8c8a8cf0", margin: "0 8px" }}>{item.amount}</Card.Text>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => Eidjew(item.id, item.name, item.imgUrl, item.price, item.amount + 1)}
                >
                  +
                </button>
              </div>
              <Card.Body>
                <br />
                <Card.Body>
                  <br />
                  <Card.Text style={{ color: "#8c8a8cf0" }}>
                    Price: ${calculateProductTotalPrice(item.price, item.amount)}
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card.Body>
            </div>
          </Col>
        ))}
        <Card.Text style={{ color: "#8c8a8cf0" }} onClick={() => {}}>
          Total: ${PriceTotal(cart)}
        </Card.Text>
        <Link className="button-55" to={"/Products"} style={{ width: 90 }} onClick={updateProductQuantity}>
          Payment
        </Link>
      </Row>
    </div>
  );
};
 
export default Cart;
