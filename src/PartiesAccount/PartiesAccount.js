import React from "react";
import { render } from "react-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'antd/dist/antd.css';

const PartiesAccount = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let separator = '/';
    const todayDate = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{
                alignSelf: 'center'
            }}>
                PARTIES ACCOUNT
            </h1>
            <Form>
                <Row>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="AccountCode">
                                    A/C Code
                                </Label>
                                <Input
                                    id="code"
                                    name="code"
                                    placeholder="Account Code"
                                    type="code"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="AccountTitle">
                                    Account Title
                                </Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Account Title"
                                    type="title"
                                />
                            </FormGroup>
                        </Col>
                    </div>
                    {/* <Col md={3}>
                        <FormGroup>
                            <Label for="SaleA/c">
                                Sales A/C
                            </Label>
                            <Input
                                id="SaleA/c"
                                name="SaleA/C"
                                placeholder="Sales A/C"
                                type="SalesA/C"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="DeliveredTo">
                                Delivered To
                            </Label>
                            <Input
                                id="DeliveredTo"
                                name="DeliveredTo"
                                placeholder="DeliveredTo"
                                type="DeliveredTo"
                            />
                        </FormGroup>
                    </Col> */}
                </Row>
                <Row>

                    <Col md={8}>
                        <FormGroup>
                            <Label for="Address">
                                Address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                placeholder="Address"
                                type="address"
                            />
                        </FormGroup>
                    </Col>
                    <Row>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="name">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="BankAccount">
                                        Bank Account
                                    </Label>
                                    <Input
                                        id="bankAccount"
                                        name="bankAccount"
                                        placeholder="Bank Account"
                                        type="bankAccount"
                                    />
                                </FormGroup>
                            </Col>
                        </div>

                    </Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="telephone">
                                Telephone
                            </Label>
                            <Input
                                id="telephone"
                                name="telephone"
                                placeholder="telephone"
                                type="telephone"
                            />
                        </FormGroup>
                    </Col>
                    {/* <Col md={3}>
                        <FormGroup>
                            <Label for="SaleA/c">
                                Sales A/C
                            </Label>
                            <Input
                                id="SaleA/c"
                                name="SaleA/C"
                                placeholder="Sales A/C"
                                type="SalesA/C"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="DeliveredTo">
                                Delivered To
                            </Label>
                            <Input
                                id="DeliveredTo"
                                name="DeliveredTo"
                                placeholder="DeliveredTo"
                                type="DeliveredTo"
                            />
                        </FormGroup>
                    </Col> */}
                </Row>
                <Button>
                    Save
                </Button>
            </Form>
        </div>
    );
};
export default PartiesAccount;