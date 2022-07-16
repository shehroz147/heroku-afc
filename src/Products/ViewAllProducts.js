// import React from "react";
// import { render } from "react-dom";
// import { Form, Row, Col, FormGroup, Label, Input, Button, Table } from 'reactstrap';
// import 'antd/dist/antd.css';

// const Customers = () => {
//     return (
//         <div style={{
//             margin: 90
//         }}>
//             <h1 style={{ textAlign: 'center' }}>CUSTOMERS LIST</h1>
//             <Table dark>
//                 <thead>
//                     <tr>
//                         <th>
//                             #
//                         </th>
//                         <th>
//                             Name
//                         </th>
//                         <th>
//                             Phone Number
//                         </th>
//                         <th>
//                             Address
//                         </th>
//                         <th>
//                             CNIC
//                         </th>
//                         <th>
//                             Email
//                         </th>
//                         <th>
//                             Company
//                         </th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">
//                             1
//                         </th>
//                         <td>
//                             Mark
//                         </td>
//                         <td>
//                             Otto
//                         </td>
//                         <td>
//                             @mdo
//                         </td>
//                         <td>
//                             Mark
//                         </td>
//                         <td>
//                             Otto
//                         </td>
//                         <td>
//                             @mdo
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">
//                             2
//                         </th>
//                         <td>
//                             Jacob
//                         </td>
//                         <td>
//                             Thornton
//                         </td>
//                         <td>
//                             @fat
//                         </td>
//                         <td>
//                             Mark
//                         </td>
//                         <td>
//                             Otto
//                         </td>
//                         <td>
//                             @mdo
//                         </td>

//                     </tr>
//                     <tr>
//                         <th scope="row">
//                             3
//                         </th>
//                         <td>
//                             Larry
//                         </td>
//                         <td>
//                             the Bird
//                         </td>
//                         <td>
//                             @twitter
//                         </td>
//                         <td>
//                             Mark
//                         </td>
//                         <td>
//                             Otto
//                         </td>
//                         <td>
//                             @mdo
//                         </td>

//                     </tr>
//                 </tbody>
//             </Table>
//             <div style={{
//                 marginLeft: 500
//             }}>
//                 <Button color="dark"
//                     outline>Add New Customer</Button>
//             </div>
//         </div>
//     );
// }

// export default Customers;
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import server from '../apis/server';
const AllProducts = () => {

    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState([
        // { id: 1, firstName: 'Ali', lastName: 'Amjad', email: 'frank.murphy@test.com', role: 'User' },
        // { id: 2, firstName: 'Malik', lastName: 'Kamran', email: 'vic.reynolds@test.com', role: 'Admin' },
        // { id: 3, firstName: 'Ahmad', lastName: 'Malik', email: 'gina.jabowski@test.com', role: 'Admin' },
        // { id: 4, firstName: 'Umad', lastName: 'Butt', email: 'jessi.glaser@test.com', role: 'User' },
        // { id: 5, firstName: 'Shehroz', lastName: 'Virk', email: 'jay.bilzerian@test.com', role: 'User' }
    ]);

    const getProducts = async () => {
        const response = await server.post('user/viewAllProducts');
        console.log(response.data);
        if (response.status === 200) {
            setProducts(response.data);
        }

    }
    useEffect(() => {
        getProducts();

    }, []);

    return (
        <div className="container">
            <h3 className="p-3 text-center">Products List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product =>
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div style={{
                alignSelf: 'center'
            }} >
                <Link
                    to={`/products`}
                    style={{ textDecoration: "none" }}
                >
                    <Button color="dark"
                    >Add New Products</Button>
                </Link>
            </div>
        </div>

    );
}

export default AllProducts;







