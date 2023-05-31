import { useParams } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

import { Row, Col ,Card} from 'react-bootstrap';
// import Products from "./Components/Shopping/Products";
export const CartContext = createContext();


const Cart = (props) => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    
    fetchCart();
    
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.get(`/Cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (id) => {
    try {

      const response = await api.post(`/Cart/${id}`);
      console.log(response.data);
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const deleteFromCart = async (id) => {
    try {
      const response = await api.delete(`/Cart/${id}`);
    
    
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };
 
const Eidjew = async (Id,Name,ImgUrl,Price,Amount) =>{
       
  if(Amount==0) {

      deleteFromCart(Id);
      let  cnt = parseInt(localStorage.getItem('count'));
                    cnt--;
                    console.log(cnt);
       localStorage.setItem('count', JSON.stringify(cnt));
  }
  else{
    const Jewerly = {
      id:Id,
      name:Name,
      imgUrl:ImgUrl,
      price:Price,
      amount:Amount,
  }
  const response = await api.put(`/Cart/${Id}`,Jewerly);
  console.log(response.data);
}

}
const PriceTotal = (PriceT)=>{
  let sum=0;
  PriceT.map((jewelry)=>{
      sum+=((Number)(jewelry.price)*(jewelry.amount));
  })
  return sum;
}

const CountA = (cnt1)=>{
  let cnt2=0;
  cnt1.map((jewelry)=>{
      cnt2+=jewelry.amount;
  })
  return cnt2;
 
}

  return (

    <div>
      <center>
      <h1 style={{ color: "#8c8a8cf0" }}>Shopping Cart</h1></center>
      <Row xs={1} sm={2} md={4} className="mb-4" style={{ padding: "15px" }}>
        {cart.map((item) => (
          <Col key={item.id} className="mb-4" style={{ margin: "15px" }}>
            <Card.Img
              variant="top"
              src={item.imgUrl}
              style={{ width:'600', height: '300', objectFit: 'cover' }}
            />
            <Card.Body>
              <br />
              <Card.Title style={{ color: "#8c8a8cf0" }}>{item.name}</Card.Title>
              <br />
              <Card.Text style={{ color: "#8c8a8cf0" }}>{item.price}$</Card.Text>
              <br />
            </Card.Body> 
            <div className="mt-3">
              <button className="button-55" onClick={()=>deleteFromCart(item.id)}>
                Delete jewelry
              </button>
              <br /><br />
              <button className='btn btn-primary ml-2' onClick={()=>Eidjew(item.id, item.name, item.imgUrl, item.price,( item.amount-1))}>
                -
              </button>
              <Card.Text style={{ color: "#8c8a8cf0" }} >{item.amount}</Card.Text>
           
              <button className='btn btn-primary ml-2' onClick={()=>Eidjew(item.id, item.name, item.imgUrl, item.price, (item.amount+1))}>
                +
              </button>
          
            {/* <Card.Body>
              <br />
              <Card.Title style={{ color: "#8c8a8cf0" }}>{CountA}</Card.Title>
              <br />
              <Card.Text style={{ color: "#8c8a8cf0" }}>{PriceTotal}$</Card.Text>
              <br />
            </Card.Body>   */}
            </div> 
          </Col>
        ))}
      </Row>
    </div>
    
    
  );
};

export default Cart;
