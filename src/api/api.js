import axios from "axios";
const API = 'http://localhost:3006';
export default axios.create({
  baseURL:"http://localhost:3006/",
})

export const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/product`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  export async function getjewerlyById(id){
    try{
        const respone=await axios.get(`${API}/product${id}`);
        return respone.data;
    }catch(error){
        console.error('Error fetching data:', error);
        return null;
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

export async function Editjewerly(jewerly,id)
{
    try{
    const respone = await axios.put(`${API}/product${id}`,jewerly);
return respone.data;
}
catch(error){
    console.log(error);
    
}
};
export const  deletejewerly= async(id)=>{
{
    try{
     await axios.delete(`${API}/product${id}`);
return respone.data;
}
catch(error){
    console.log(error);
   
}
};
}
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