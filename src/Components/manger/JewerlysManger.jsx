import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import { Row, Col, Card } from 'react-bootstrap';
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
  
  return (
   
        <>
  <center>
          <h1 style={{ color: "#8c8a8cf0"}}>Jewerlys</h1>
          </center>
          <Row xs={1} sm={2} md={4} className="mb-4" >
            {jewerlys.map((jewerly) => (
              <Col key={jewerly.id} className="mb-4">
               <br/>
                  <Card.Img variant="top" src={jewerly.imageUrl} style={{  whidth: '500',height: '250px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ color: "#8c8a8cf0"}}>{jewerly.name}</Card.Title>
                    <br/>
                    <Card.Text>{jewerly.description}</Card.Text>
                    <br/>
                  </Card.Body>
                  
                    <Link to={`/JewerlysManger/add`} className="Link-55" style={{margin:"10px"}}>Add</Link>
                    <Link to={`/JewerlyManger/${jewelryId}`} className="Link-55" style={{margin:"10px"}}>Edit</Link>
                    <Link to={`/Jewerly/${jewerly.id}`} className="Link-55" style={{margin:"10px"}}>remove</Link>
              
              </Col>
              
            ))}
          </Row>
        </>
  
  );
};

export default JewerlysManger;