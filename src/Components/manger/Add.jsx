import { useState } from 'react';
import { addjewerly} from '../../api/api';
const Add = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    price: 0,
   
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    addjewerly(newProduct);
    setNewProduct({
      name: '',
      imageUrl: '',
      price: 0,
      
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ padding:"20px" }}>
         Name:
        <input
          type="text"
          value={newProduct.name}
          onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}
        />
      </label>
     <br/>
      <label style={{ padding:"20px" }}>
        Image URL:
        <input
          type="text"
          value={newProduct.imageUrl}
          onChange={(event) => setNewProduct({ ...newProduct, imageUrl: event.target.value })}
        />
      </label>
      <br/>
      <label style={{ padding:"20px" }}>
        Price:
        <input
          type="number"
          value={newProduct.price}
          onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
        />
      </label>
      <br/>  
      <button type="submit" style={{ margin:"20px" }}>Add Product</button>
    </form>
  );
};

export default Add;