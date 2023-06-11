import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductDataById, updateProductData } from '../../api/api';
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
  console.log(useParams());
  const { jewerlymangerId } = useParams();
  const jewId = jewerlymangerId;
  let navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProductDataById(jewId);
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
      await updateProductData(jewId, jew);
      setSuccess('Product updated successfully.');
    } catch (error) {
      console.error('Failed to update product:', error);
      setError('Failed to update product.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-manager">
        <Form onSubmit={handleUpdate}>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form.Group>
            <Form.Label>Jewelry Name</Form.Label>
            <Form.Control type="text" value={jew.name} onChange={e => setJew({ ...jew, name: e.target.value })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={jew.price} onChange={e => setJew({ ...jew, price: e.target.value })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" value={jew.imageUrl} onChange={e => setJew({ ...jew, imageUrl: e.target.value })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" value={jew.amount} onChange={e => setJew({ ...jew, amount: e.target.value })} />
          </Form.Group>

          <Button variant="primary" type="submit">Update</Button>
          <Button variant="danger" onClick={() => navigate(-1)}>Cancel</Button>
        </Form>
      </div>
    </>
  );
};

export default Jewerlymanger;
