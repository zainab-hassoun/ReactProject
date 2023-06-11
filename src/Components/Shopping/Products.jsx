
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import { Row, Col, Card } from 'react-bootstrap';

import api from '../../api/api';
const Products = () => {
 
  const [jewelries, setJewelries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    try {
      const response = await api.get(`/Cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setJewelries(data);
      setIsLoading(false);
      fetchCart();
    };

    setTimeout(() => {
      getData();
    }, 4000);
  }, []);
  const Eidjew = async (Id,Name,ImgUrl,Price,Amount) =>{
       
    if(Amount==0) {
        deleteFromCart(id);
        console.log("sold out");
        let  cnt = parseInt(localStorage.getItem('count'));
                                 //cnt--;
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
  
    const response = await api.post(`/Cart`,Jewerly);
    console.log(response.data);
  }
}
  const addjew = async(Id,Name,ImgUrl,Price) =>{
    const find = cart.find(jew => jew .id===Id);
    if(find!=null){
        Eidjew(Id,Name,ImgUrl,Price,(find.amount+1));
    }
    else{
    const Jewerly = {
        id:Id,
        name:Name,
        imgUrl:ImgUrl,
        price:Price,
        amount:1,
    
    }
    
    const response = await api.post('/Cart',Jewerly);
    console.log(response.data);
    }
}


  // const editJewelry = async (jewelry, id) => {
  //   try {
  //     const response = await axios.put(`/product/${id}`, jewelry);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              src={jewelry.imageUrl}
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
              <button onClick={()=> {addjew(jewelry.id,jewelry.name,jewelry.imageUrl,jewelry.price)}} className="button-55">Add to Cart</button>
            </span>
          </Col>
        ))}
      </Row>
    
    </>
  );
};

export default Products;
