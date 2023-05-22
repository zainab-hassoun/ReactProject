import { useEffect, useState } from 'react';
import { fetchData, } from '../../api/api';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JewerlysManger = () => {
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
  
          <h1 >Jewerlys</h1>
          <Row xs={1} sm={2} md={4} className="mb-4" >
            {jewerlys.map((jewerly) => (
              <Col key={jewerly.id} className="mb-4">
                <Card >
                  <Card.Img variant="top" src={jewerly.imageUrl} style={{  whidth: '500',height: '250px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{jewerly.name}</Card.Title>
                    <Card.Text>{jewerly.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Link to={`/JewerlysManger/add`} className="text-right">Add</Link>
                    <Link to={`/Jewerly/${jewerly.id}`} className="text-right">Edit</Link>
                    <Link to={`/Jewerly/${jewerly.id}`} className="text-right">remove</Link>
                  </Card.Footer>
                </Card>
              </Col>
              
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default JewerlysManger;