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
import React, { useState } from 'react';
import { Button } from 'reactstrap'
import server from '../apis/server';
import history from '../history';
const NewCustomers = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [accountTitle, setAccountTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    const saveCustomer = async () => {
        const data = {
            email: email,
            name: name,
            accountTitle: accountTitle,
            phoneNumber: phoneNumber
        }
        const response = await server.post('user/addCustomer', data);
        console.log(response.data);
        if (response.status === 200) {
            alert('customer added successfully');
            history.push("/customers");
        }
    }

    const [users, setUsers] = useState([
        { id: 1, firstName: 'Ali', lastName: 'Amjad', email: 'frank.murphy@test.com', role: 'User' },
        { id: 2, firstName: 'Malik', lastName: 'Kamran', email: 'vic.reynolds@test.com', role: 'Admin' },
        { id: 3, firstName: 'Ahmad', lastName: 'Malik', email: 'gina.jabowski@test.com', role: 'Admin' },
        { id: 4, firstName: 'Umad', lastName: 'Butt', email: 'jessi.glaser@test.com', role: 'User' },
        { id: 5, firstName: 'Shehroz', lastName: 'Virk', email: 'jay.bilzerian@test.com', role: 'User' }
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">Add New Customer</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Account Title</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td><input
                            className="login-input"
                            name="name"
                            placeholder="Name"
                            place
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /></td>
                        <td><input
                            className="login-input"
                            name="email"
                            placeholder="Email"
                            place
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /></td>
                        <td><input
                            className="login-input"
                            name="accounttitle"
                            placeholder="Account Title"
                            place
                            value={accountTitle}
                            onChange={(e) => setAccountTitle(e.target.value)}
                        /></td>
                        <td><input
                            className="login-input"
                            name="phonenumber"
                            placeholder="Phone Number"
                            place
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        /></td>
                    </tr>
                </tbody>
            </table>
            <div style={{
                alignSelf: 'center'
            }} >
                <Button color="dark"
                    onClick={saveCustomer}>Save Customer</Button>
            </div>
        </div>

    );
}

export default NewCustomers







