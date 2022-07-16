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
const Customers = () => {

    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([
        // { id: 1, firstName: 'Ali', lastName: 'Amjad', email: 'frank.murphy@test.com', role: 'User' },
        // { id: 2, firstName: 'Malik', lastName: 'Kamran', email: 'vic.reynolds@test.com', role: 'Admin' },
        // { id: 3, firstName: 'Ahmad', lastName: 'Malik', email: 'gina.jabowski@test.com', role: 'Admin' },
        // { id: 4, firstName: 'Umad', lastName: 'Butt', email: 'jessi.glaser@test.com', role: 'User' },
        // { id: 5, firstName: 'Shehroz', lastName: 'Virk', email: 'jay.bilzerian@test.com', role: 'User' }
    ]);

    const getCustomers = async () => {
        const response = await server.get('user/getCustomer');
        console.log(response.data);
        if (response.status === 200) {
            setUsers(response.data);
        }

    }
    useEffect(() => {
        getCustomers();

    }, []);

    return (
        <div className="container">
            <h3 className="p-3 text-center">Customers List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Account Title</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.accountTitle}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div style={{
                alignSelf: 'center'
            }} >
                <Link
                    to={`/newCustomer`}
                    style={{ textDecoration: "none" }}
                >
                    <Button color="dark"
                    >Add New Customer</Button>
                </Link>
            </div>
        </div>

    );
}

export default Customers







