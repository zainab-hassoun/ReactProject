import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDataById, updateData } from '../../api/api';
import { Form, Button, Alert } from 'react-bootstrap';

const Jewerlymanger = () => {
  const [jew, setJew] = useState({
    name: '',
    price: '',
    imageUrl: '',
    amount: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { jewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataById(jewId);
        setJew(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsLoading(false);
        setError('Failed to fetch product.');
      }
    };

    getData();
  }, [jewId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedJew = Object.fromEntries(
        Object.entries(jew).filter(([_, value]) => value !== '')
      );

      await updateData(jewId, updatedJew);
      setSuccess('Product updated successfully.');
    } catch (error) {
      console.error('Failed to update product:', error);
      setError('Failed to update product.');
    }
  };

  return (
    <>
      <h1 className="my-4">Edit Jewelry</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      {!isLoading && (
        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={jew.name}
              onChange={(e) => setJew({ ...jew, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={jew.price}
              onChange={(e) => setJew({ ...jew, price: parseFloat(e.target.value) })}
            />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={jew.imageUrl}
              onChange={(e) => setJew({ ...jew, imageUrl: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              value={jew.amount}
              onChange={(e) => setJew({ ...jew, amount: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Jewelry
          </Button>
        </Form>
      )}
    </>
  );
};

export default Jewerlymanger;
