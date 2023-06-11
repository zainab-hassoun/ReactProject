import { useEffect, useState } from 'react';
import { fetchProductData, deleteProductData } from '../../api/api';
import { Row, Col, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './jewelry.css';

const JewerlysManger = () => {
  const [jewerlys, setJewerlys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductData();
      setJewerlys(data);
      setIsLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 4000);
  }, []);

  const handleDelete = async (jewId) => {
    try {
      await deleteProductData(jewId);
      setJewerlys((prevJewerlys) =>
        prevJewerlys.filter((jewerly) => jewerly.id !== jewId)
      );
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <>
      <center>
        <h1 style={{ color: '#8c8a8cf0' }}>Jewerlys</h1>
      </center>

      <Link to="/JewerlysManger/add" className="Link-55" style={{ margin: '10px' }}>
        Add Product
      </Link>

      <Row xs={1} sm={2} md={4} className="mb-4">
        {jewerlys.map((jewerly) => (
          <Col key={jewerly.id} className="mb-4">
            <br />
            <Card.Img
              variant="top"
              src={jewerly.imageUrl}
              style={{ width: '500', height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title style={{ color: '#8c8a8cf0' }}>{jewerly.name}</Card.Title>
              <br />
              <Card.Text>{jewerly.description}</Card.Text>
              <br />
            </Card.Body>
            <Link to={`/Jewerlymanger/${jewerly.id}`} className="Link-55" style={{ margin: '10px' }}>
              Edit
            </Link>
               
            <Link
              variant="danger"
              className="ml-2"
              onClick={() => handleDelete(jewerly.id)}
            >
              Delete 
            </Link>
          
          </Col>
        ))}
      </Row>
    </>
  );
};

export default JewerlysManger;