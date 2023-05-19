
import { useState , useEffect } from "react";
import React from "react";
function Session() {
    const [items, setItems] = useState([]);
    const [item,setItem] = useState('');
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);
function add(){
  
    setItems([...items,item]);
    localStorage.setItem('items', JSON.stringify([...items,item]));
    setItems([...items,item]);
    setItem('')
    
}
const deleteItem = (id)=>{
  
    const updateitem = items.filter((elem)=>elem!=id)
    setItems(updateitem);
    localStorage.setItem('items', JSON.stringify(updateitem));


}
return (
    <>
    <center>
    <h1>TODO'S</h1>
    <br />
    <h3>Local Storage Crud app</h3>
    <br />
    <p>CRUD-creat read update</p>
    <br />
    <p>Add todo<input type="text"  value={item} onChange={(e) => setItem(e.target.value)}/><button onClick={()=>add()}>add</button></p><br />
    {items.map((elem,ind) => (
        <div className="eachItem" key={ind}>
         <input type="checkbox" /> <h7>{elem}<button onClick={()=>deleteItem(elem)}>delete</button></h7>
      </div>     
                   ))} </center>
    </>
)
    }
export default Session;