import axios from "axios";
const API = 'http://localhost:3006';

const apiClient = axios.create({
  baseURL: API
});

const api = API;
export {api};
export const fetchProductData = async () => {
  try {
    const response = await axios.get(`${API}/product`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const fetchProductDataById = async (productId) => {
  try {
    const response = await apiClient.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};

export const updateProductData = async (productId, newProductData) => {
  try {
    const response = await apiClient.put(`/product/${productId}`, newProductData);
    return response.data;
  } catch (error) {
    console.error('Failed to update product:', error);
    return null;
  }
};

export const deleteProductData = async (productId) => {
  try {
    const response = await apiClient.delete(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return null;
  }
};

export const addProduct = async (newProduct) => {
  try {
    const response = await apiClient.post(`/product`, newProduct);
    return response.data;
  } catch (error) {
    console.error('Error adding new product:', error);
    return null;
  }
};

export const addUser = async (newUser) => {
  try {
    const response = await apiClient.post(`/users`, newUser);
    return response.data;
  } catch (error) {
    console.error('Error adding new user:', error);
    return null;
  }
};

export const loginUser = async(email, password) => {
  try {
    const response = await apiClient.get(`/users`);
    const users = response.data;

    const user = users.find(user => user.email === email && user.password === password);

    if(user) {
      alert("Success");
      return user;
    } else {
      alert('Invalid email or password');
      return null;
    }
  } catch (error) {
    alert('Error logging in:', error);
    return null;
  }
};
export const fetchCart = async (userId) => {
  try {
    const response = await axios.get(`${API}/Cart?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return null;
  }
};

export const addToCart = async (userId, product) => {
  try {
    //const cartItem = { ...product, userId };
    console.log(product)
    const response = await axios.post(`${API}/Cart/`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw new Error('Failed to add to cart.');
  }
};

export const deleteFromCart = async (cartItemId) => {
  try {
    const response = await axios.delete(`${API}/Cart/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting from cart:', error);
    throw new Error('Failed to delete from cart.');
  }
};
export const Jewname= async (nameJew,diff) =>{
  const response = await axios.get(`${API}/Cart`);
  const allProducts = response.data;
  let id=null;
  allProducts.map(async (pr)=>{
    if(pr.name===nameJew){
        id = pr.id;
        let update = pr.amount-diff;
      
      const updatesProduct = {
        name:pr.name,
        imgUrl:pr.imgUrl,
        price:pr.price,
        id:pr.id,
        amount:update
      }
      const response = await axios.put(`${API}/Cart/${pr.id}`, updatesProduct);
      return;
    }
        
  });
 
  
};
export const updateCart = async (cartItemId, amount,name) => {
  try {
   //item.id, item.amount, item.name
    Jewname(name,amount);
    const response1 = await axios.get(`${API}/product/${cartItemId}`);
    const pr = response1.data;
    const updatesProduct = {
      name:pr.name,
      imgUrl:pr.imgUrl,
      price:pr.price,
      id:pr.id,
      amount:(pr.amount-amount)
    }
    const response = await axios.put(`${API}/product/${cartItemId}`, updatesProduct);
    return response.data;
  } catch (error) {
    console.error('Error updating cart:', error);
    throw new Error('Failed to update cart.');
  }
};

