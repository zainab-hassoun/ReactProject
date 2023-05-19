
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
const API = 'http://localhost:3006/user';

export async function addUser(user) {
try {
const response = await axios.post(`${API}`, user);
return response.data;
} catch (error) {
console.log(error);
return null;
}
}