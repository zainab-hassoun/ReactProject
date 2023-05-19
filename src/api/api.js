
// export const fetchData = async () => {
//     try {
//       const response = await axios.get(`${API}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };
//   export async function getshoeById(id){
//     try{
//         const respone=await axios.get(`${API}/${id}`);
//         return respone.data;
//     }catch(error){
//         console.error('Error fetching data:', error);
//         return null;
//       }
//   };
// export async function addShoe(shoe)
// {
//     try{
//     const respone = await axios.post(`${API}`,shoe);
// return respone.data;
// }
// catch(error){
//     console.log(error);
//     return null;
// }
// };

// export async function EditShoe(shoe,id)
// {
//     try{
//     const respone = await axios.put(`${API}/${id}`,shoe);
// return respone.data;
// }
// catch(error){
//     console.log(error);
    
// }
// };
// export const  deleteShoe= async(id)=>{
// {
//     try{
//      await axios.delete(`${API}/${id}`);
// return respone.data;
// }
// catch(error){
//     console.log(error);
   
// }
// };
// }
// export async function Shoe(shoe)
// {
//     try{
//     const respone = await axios.get(`${API}`,shoe);
// return respone.data;
// }
// catch(error){
//     console.log(error);
//     return null;
// }

// };
// export async function getuserById(id){
//     try{
//         const respone=await axios.get(`${API}/${id}`);
//         return respone.data;
//     }catch(error){
//         console.error('Error fetching data:', error);
//         return null;
//       }
//   };
// export async function addUser(user)
// {
//     try{
//     const respone = await axios.post(`${API}`,user);
// return respone.data;
// }
// catch(error){
//     console.log(error);
//     return null;
// }
// };
import axios from "axios";
const API = 'http://localhost:3006';

export const addUser = async (user) => {
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
