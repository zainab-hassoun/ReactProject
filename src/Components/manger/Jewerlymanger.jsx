import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getjewerlyById, Editjewerly, deletejewerly } from '../../api/api';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

const Jewerlymanger = () => {
  const [jewerly, setJewerly] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { jewerlyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await  getjewerlyById(shoeId);
        setJewerly(data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch shoe data');
        setIsLoading(false);
      }
    };

    getData();
  }, [jewerlyId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!jewerly.name  || !jewerly.price || !jewerly.imageUrl) {
      setError('All fields are required');
      return;
    }

    setIsLoading(true);

    try {
      await Editjewerly(jewerlyId, jewerly);
      setSuccess('Shoe updated successfully');
      setIsLoading(false);
    } catch (error) {
      setError('Failed to update shoe');
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      await deletejewerly(JewerlyId);
      navigate('/Jewerlys');
      setIsLoading(false);
    } catch (error) {
      setError('Failed to delete shoe');
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Spinner animation="border" role="status" style={{ animationDuration: '4s' }}>
  <span className="visually-hidden">Loading...</span>
</Spinner>

      ) : (
        <>
          <h1 className="my-4">Edit jewerly</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          {shoe && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={shoe.name}
                  onChange={(e) => setJewerly({ ...shoe, name: e.target.value })}
                />
              </Form.Group>
             
          
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={shoe.price}
                  onChange={(e) => setJewerly({ ...shoe, price: parseFloat(e.target.value) })}
                />
              </Form.Group>
              <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={shoe.imageUrl}
                  onChange={(e) => setJewerly({ ...shoe, imageUrl: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Shoe
              </Button>
              <Button variant="danger" className="ml-2" onClick={handleDelete}>
                Delete Shoe
              </Button>
            </Form>
          )}
        </>
      )}
    </Container>
  );
  
};

export default Jewerlymanger;