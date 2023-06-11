import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getjewerlyById, deletejewerly, Editjewerly } from '../../api/api';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
 
const Jewerlymanger = () => {
  const [jewelry, setJewelry] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { jewelryId } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getjewerlyById(jewelryId);
        setJewelry(data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setIsLoading(false);
      }
    };
 
    getData();
  }, [jewelryId]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
 
    if (!jewelry.name || !jewelry.price || !jewelry.imageUrl) {
      setError('All fields are required');
      return;
    }
    setIsLoading(true);
 
    // try {
    //   await Editjewerly(jewelryId, jewelry);
    //   setSuccess('Jewelry updated successfully');
    //   setIsLoading(false);
    // } catch (error) {
    //   setError('Failed to update jewelry');
    //   setIsLoading(false);
    // }
  };
 
  const handleDelete = async () => {
    setIsLoading(true);
 
    try {
      await deletejewerly(jewelryId);
      navigate('/');
      setIsLoading(false);
    } catch (error) {
      setError('Failed to delete jewelry');
      setIsLoading(false);
    }
  };
 
  return (
    <>
      <h1 className="my-4">Edit jewelry</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      {jewelry && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={jewelry.name}
              onChange={(e) => setJewelry({ ...jewelry, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={jewelry.price}
              onChange={(e) => setJewelry({ ...jewelry, price: parseFloat(e.target.value) })}
            />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={jewelry.imageUrl}
              onChange={(e) => setJewelry({ ...jewelry, imageUrl: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update jewelry
          </Button>
          <Button variant="danger" className="ml-2" onClick={handleDelete}>
            Delete jewelry
          </Button>
        </Form>
      )}
    </>
  );
};
 
export default Jewerlymanger;

 
