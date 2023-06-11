import axios from "axios";
const API = 'http://localhost:3006';

export default axios.create({
  baseURL: API
});

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API}/product`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export const fetchDataById = async (jewId) => {
  try {
    const response = await axios.get(`${API}/product/${jewId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw new Error('Failed to fetch product data.');
  }
};

export const updateData = async (jewId, jew) => {
  try {
   
    const response = await axios.put(`${API}/product/${jewId}`, jew);
    if (response.status !== 200) {
      throw new Error('Failed to update product');
    }
    return response.data;
  } catch (error) {
    console.error('Failed to update product:', error);
    throw new Error('Failed to update product.');
  }
};
export const deleteData = async (jewId) => {
  try {
    const response = await axios.delete(`${API}/product/${jewId}`);
    if (response.status !== 200) {
      throw new Error('Failed to delete product');
    }
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
};
  

export async function addjewerly(jewerly)
{
    try{
    const respone = await axios.post(`${API}/product`,jewerly);
return respone.data;
}
catch(error){
    console.log(error);
    return null;
}
};



export async function jewerly(jewerly)
{
    try{
    const respone = await axios.get(`${API}/product`,jewerly);
return respone.data;
}
catch(error){
    console.log(error);
    return null;
}
};
export const addUser = async (user) => {
  console.log("add user",user)
    try {
      const response = await axios.post(`${API}/users`, user);
      return response.data;
    } catch (error) {
      throw error;
    }
};
  


export const login = async(email , password ) => {
    try {
        const users = await axios.get(`${API}/users`);
        console.log(users.data);
        

        if(users.data.email === email && users.data.password === password) {
            // User found with matching email and password
            alert("succses");
            return users.data;
        } else {
            // No user found with matching email and password
            alert('Invalid email or password');
        }
    } catch (error) {
       alert (error);
    }
};
export const product = async (product) => {
    try {
      const response = await axios.get(`${API}/product`, product);
      return response.data;
    } catch (error) {
      throw error;
    }
};