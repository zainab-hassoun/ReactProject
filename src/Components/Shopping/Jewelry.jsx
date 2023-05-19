// import { useEffect, useState } from 'react';
// // import { fetchData, } from '../../api/api';
// import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Jewelry = () => {
//   const [shoes, setShoes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetchData();
//       setShoes(data);
//       setIsLoading(false);
//     };
//     setTimeout(() => {
//       getData();
//     }, 4000);
//   }, []);

//   return (
//     <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
//       {isLoading ? (
//         <div className="text-center">
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//           <div>Getting data, please wait...</div>
//         </div>
//       ) : (
//         <>
//           <h1 className="my-4">Jewelry</h1>
//           <Row >
//             {shoes.map((shoe) => (
//               <Col key={shoe.id} className="mb-4">
//                 <Card>
//                   <Card.Img variant="top" src={shoe.imageUrl} style={{  whidth: '550',height: '250px', objectFit: 'cover' }} />
//                   <Card.Body>
//                     <Card.Title>{shoe.name}</Card.Title>
//                     <Card.Text>{shoe.description}</Card.Text>
//                   </Card.Body>
//                   <Card.Footer className="d-flex justify-content-between">
//                     <small className="text-muted">Price: ${shoe.price}</small>
                    
//                   </Card.Footer>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Jewelry;