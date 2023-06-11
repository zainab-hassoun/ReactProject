import { useParams } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';
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

const calculateProductTotalPrice = (price, amount) => {
  return Number(price) * amount;
};

const updateProductQuantity = async () => {
  try {
    const updatePromises = cart.map(item => updateData(item.id, { amount: item.amount }));
    await Promise.all(updatePromises);
    navigate("/Products"); // Redirect to the payment page after updating quantities
  } catch (error) {
    console.error("Failed to update product quantity:", error);
  }
};




const PriceTotal = (PriceT)=>{
  let sum=0;
  PriceT.map((jewelry)=>{
      sum+=((Number)(jewelry.price)*(jewelry.amount));
  })
  return sum;
};

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
                    <div className="mt-3" style={{ display: 'flex', alignItems: 'center' }}>
              <button className="btn btn-primary ml-2" onClick={() => Eidjew(item.id, item.name, item.imgUrl, item.price, item.amount - 1)}>
              -
              </button>
              <Card.Text style={{ color: "#8c8a8cf0", margin: '0 8px' }}>{item.amount}</Card.Text>
              <button className="btn btn-primary ml-2" onClick={() => Eidjew(item.id, item.name, item.imgUrl, item.price, item.amount + 1)}>
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
                  <Link className="button-55" to={'/Products'} style={{width:90}} onClick={updateProductQuantity}>
  Payment
</Link>

         
      </Row>
     
    </div>
    
    
  );
};

export default Cart;
