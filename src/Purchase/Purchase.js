import React from "react";
import { render } from "react-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'antd/dist/antd.css';

const Purchase = () => {
    return (
        <div style={{ padding: 20 }}>
            <Form>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="type">
                                Type
                            </Label>
                            <Input
                                id="type"
                                name="type"
                                placeholder="Choose Type"
                                type="type"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="SaleA/c">
                                Date
                            </Label>
                            <Input
                                id="Date"
                                name="Date"
                                placeholder="Date"
                                type="Date"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
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
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="totalBags">
                                Total Bags
                            </Label>
                            <Input
                                id="totalBags"
                                name="totalBags"
                                placeholder="Total Bags"
                                type="TotalBags"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="TotalWeight">
                                Total Weight
                            </Label>
                            <Input
                                id="TotalWeight"
                                name="TotalWeight"
                                placeholder="TotalWeight"
                                type="TotalWeight"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="Freight">
                                Freight
                            </Label>
                            <Input
                                id="Freight"
                                name="Freight"
                                placeholder="Freight"
                                type="Freight"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="Salai">
                                Salai
                            </Label>
                            <Input
                                id="Salai"
                                name="Salai"
                                placeholder="Salai"
                                type="Salai"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                {/* <FormGroup>
                    <Label for="exampleAddress">
                        Address
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="1234 Main St"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">
                        Address 2
                    </Label>
                    <Input
                        id="exampleAddress2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                    />
                </FormGroup> */}
                <Row>
                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr >

                                <th >ID</th>
                                <th >ITEM </th>
                                <th >ITEM</th>
                                <th >FROM</th>
                                <th >DESCRIPTION</th>
                                <th >BAGS</th>
                                <th >WEIGHT PER BAG</th>
                                <th >TOTAL WEIGHT</th>
                                <th >RATE</th>
                                <th >TOTAL AMOUNT</th>
                            </tr>
                            {

                                <>
                                    <tr >
                                        <th ></th>
                                        <th ><input className="text-center" placeholder="Case Title" type="text" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} /></th>
                                        <th ><input className="text-center" placeholder="Court Name" type="text" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} /></th>
                                        {/* <th >
                                    <input className="text-center" placeholder="magno" type="text" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} onChange={(e) => setCategory(e.target.value)} />
                                </th> */}
                                        <th>
                                            <select style={{ borderRadius: "5px", color: "grey", width: "100px", border: "1px solid lightgrey" }} name="" id="" className="" >
                                                <option value="Corporate law">Corporate law</option>
                                                <option value="Taxation Law">Taxation Law</option>
                                                <option value="Criminal law">Criminal law</option>
                                                <option value="Civil law">Civil law</option>
                                                <option value="Family law">Family law</option>
                                                <option value="Real estate">Real estate</option>
                                                <option value="Rent law">Rent law</option>
                                                <option value="Intellectual property">Intellectual property</option>
                                                <option value="Banking law">Banking law</option>
                                                <option value="Medical law">Medical law</option>
                                                <option value="Tax law">Tax law</option>
                                                <option value="Business law">Business law</option>
                                                <option value="Immigration ">Immigration</option>
                                                <option value="Constitution law">Constitution law</option>
                                                <option value="Employment & Labour Law">Employment & Labour Law</option>
                                                <option value="International Law">International Law</option>
                                                <option value="Environment Law">Environment Law</option>
                                                <option value="Human rights">Human rights</option>
                                                <option value="Consumer protection">Consumer protection</option>
                                                <option value="Harassment">Harassment</option>
                                                <option value="Cyber Crime">Cyber Crime</option>
                                                <option value="Defamation ">Defamation </option>
                                                <option value="Arbitration Law">Arbitration Law</option>
                                                <option value="Commercial Law">Commercial Law</option>
                                                <option value="Construction Law">Construction Law</option>
                                            </select>
                                        </th>
                                        {/* <th ><input className="text-center" placeholder="Stage" type="text" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} onChange={(e) => setStage(e.target.value)} /></th> */}
                                        <th>
                                            <select style={{ borderRadius: "5px", color: "grey", width: "100px", border: "1px solid lightgrey" }} name="" id="" className="" >
                                                <option value="open">Open</option>
                                                <option value="fixed">Fixed</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </th>
                                        <th ><input className="text-center" placeholder="Starting Date" type="date" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} /></th>
                                        <th ><input className="text-center" placeholder="Next Hiring" type="date" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} /></th>
                                        <th ><input className="text-center" placeholder="Notes" type="text" name="" id="" style={{ borderRadius: "5px", width: "100px", border: "1px solid lightgrey", color: "grey" }} /></th>
                                    </tr>
                                    <div className="my-2" style={{ position: 'relative', left: "500px" }}>
                                        <button className="py-1 px-4" style={{ borderRadius: "15px", border: "none", backgroundColor: "#244e78", color: "white" }} >Submit</button>
                                    </div>
                                </>
                            }
                        </thead>
                        <tbody style={{ position: "relative" }}>
                            {/* {
                                props.selectedDateData.length === 0 && (
                                    <tr className="justify-content-center" >
                                        <td className=""> No Data Available</td>
                                    </tr>
                                )
                            } */}
                            {/* {
                                props.selectedDateData.length !== 0 && (
                                    props.selectedDateData.map((dat, index) => (
                                        <>
                                            <Diary14TableDatarow index={index} dat={dat}
                                                setSearch={props.setSearch}
                                                Search={props.Search}
                                                setTitle={setTitle}
                                                setCourtName={setCourtName}
                                                setCategory={setCategory}
                                                setStage={setStage}
                                                setPreviousHiring={setPreviousHiring}
                                                setNextHiring={setNextHiring}
                                                setNotes={setNotes}
                                                setStartingDate={setStartingDate}
                                            />
                                        </>

                                    ))
                                )
                            } */}
                        </tbody>
                    </Table>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">
                                Zip
                            </Label>
                            <Input
                                id="exampleZip"
                                name="zip"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Input
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                    />
                    <Label
                        check
                        for="exampleCheck"
                    >
                        Check me out
                    </Label>
                </FormGroup>
                <Button>
                    Sign in
                </Button>
            </Form>
        </div>
    );
};
export default Purchase;