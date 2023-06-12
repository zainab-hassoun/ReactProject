import { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { fetchProductData, addToCart, fetchCart } from '../../api/api';

const Products = () => {
  const [jewelries, setJewelries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchCartData = async () => {
    const data = await fetchCart(1); // Pass the user ID
    setCart(data);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductData();
      setJewelries(data);
      
      setIsLoading(false);
      fetchCartData();
    };

    setTimeout(() => {
      getData();
    }, 4000);
    
  }, []);

  const addjew = async (Id, Name, ImgUrl, Price) => {
    const find = cart.find(jew => jew.id === Id);
    if (find != null) {
      let am = find.amount +1;
      const product = {
        id: Id, 
        name: Name, 
        imgUrl: ImgUrl, 
        price: Price, 
        amount:am
      }
      const updatedCart = await addToCart(1, product); // Pass the user ID
      setCart(updatedCart);
    }
    else {
      const newCart = await addToCart(1, { id: Id, name: Name, imgUrl: ImgUrl, price: Price, amount: 1 }); // Pass the user ID
      setCart(newCart);
    }
  };

  return (
    <>
      <center>
        <h1 style={{ color: "#8c8a8cf0" }}>Jewelrys</h1>
      </center>
      <br />
      <Row xs={1} sm={2} md={4} className="mb-4" style={{ padding: "15px" }}>
        {jewelries.map((jewelry) => (
          <Col key={jewelry.id} className="mb-4">
            <Card.Img
              variant="top"
              src={jewelry.imgUrl}
              style={{ width: '500', height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <br />
              <Card.Title style={{ color: "#8c8a8cf0" }}>{jewelry.name}</Card.Title>
              <br />
              <Card.Text style={{ color: "#8c8a8cf0" }}>{jewelry.price}$</Card.Text>
              
              <br />
              
            </Card.Body>
            <span className="text">
              <button onClick={() => { addjew(jewelry.id, jewelry.name, jewelry.imgUrl, jewelry.price) }} className="button-55">Add to Cart</button>
            </span>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
