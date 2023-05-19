// import React from 'react';

// import {Shoe} from '../../api/api';
// import { Link } from 'react-router-dom';


// export default Cart =() => {
    
//         const productIdsInCart = getItemsInCart();
//         const productsInCart = productIdsInCart.map(productId => Shoe.find(product => productId === product.id));

//         const tableRows = productsInCart.map(product => (
//             <tr key={product.id}>
//                 <td>{product.immageUrl}</td>
//                 <td>{product.price}</td>
//                 <td>{product.name}</td>
//             </tr>
//         ));

//         return (
//             <div className="container">
//                 <h4>Welcome to your shopping cart</h4>
           
//                 <table className="striped">
//                      <tbody>
//                         <tr>
//                             <th>image:</th>
//                             <th>Price</th>
//                             <th>Name</th>
//                         </tr>
//                         {tableRows}
//                     </tbody>
//                 </table>
//                 <Link to="/">Go back to Home</Link>
//             </div>
//         );
    
// }