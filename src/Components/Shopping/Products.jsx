import { useEffect, useState } from 'react';
import { fetchData} from '../../api/api';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
const Products= () => {
  const [jewerlys, setJewerly] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setJewerly(data);
      setIsLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 4000);
  }, []);

 async function Editjewerly(jewerly,id)
  {
      try{
      const respone = await axios.put(`${API}/product${id}`,jewerly);
  return respone.data;
  }
  catch(error){
      console.log(error);
      
  }
  };

  return (
   
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div>Getting data, please wait...</div>
        </div>
      ) : (
        <>
  
          <h1 style={{color:"#8c8a8cf0"}}>Jewelrys</h1>
          <br/>
          <Row xs={1} sm={2} md={4} className="mb-4" >
            {jewerlys.map((jewerly) => (
              <Col key={jewerly.id} className="mb-4">
                
                  <Card.Img variant="top" src={jewerly.imageUrl} style={{  whidth: '500',height: '250px', objectFit: 'cover' }} />
                  
                  <Card.Body>
                  <br/>
                    <Card.Title style={{color:"#8c8a8cf0",}}>{jewerly.name}</Card.Title>
                    <br/>
                    <Card.Text style={{color:"#8c8a8cf0"}}>{jewerly.price}$</Card.Text>
                    <Card.Text>{jewerly.description}</Card.Text>
                    <br/>
                  </Card.Body>
                  
                  <span class="text">

                    <Link to={`/addtocart/${jewerly.id}`} className="button-55">Add to cart</Link>
                    
                    </span>
                    
                  
                
              </Col>
              
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Products;