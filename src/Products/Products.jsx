import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import server from "../apis/server";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import Box from "@material-ui/core/Box";
import * as yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { signIn } from "../Actions";
import Logo from '../Logo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
    },
    large: {
        width: '100%',
        height: "20%",

    },

    CircularProgress: {
        position: "absolute",
        top: "55%",
        right: "50%",
        left: "50%",
    },
}));

export default function Products() {
    const [open, setOpen] = useState(false)
    const history = useHistory();
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch();
    const classes = useStyles();
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const addProduct = async () => {
        // history.push('/home')
        const data = {
            name: name,
            price: price
        }
        const response = await server.post('user/addProduct', data);
        console.log(response.data);
        // const values = {
        //     email: email,
        //     password: password
        // }
        // const { data } = await server.post("Admin/login", values);
        // console.log(data)
        // dispatch(signIn(data.result._id, data.token));
    }


    const closeAlert = () => {
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: ""
        },

        onSubmit: async (values, { resetForm }) => {
            try {
                // const data = await server.post("Admin/login", values);
                console.log(values);
                // dispatch(signIn(data.result._id, data.token));
                // console.log(data.user);
                // console.log(data.result._id);
                // console.log(data);
                resetForm({
                    values: "",
                });
            } catch (e) {
                console.log(e.message);
            }
        },
    });

    return (
        <div style={{
            height: '100%',
            width: '100%'
        }}>

            <div style={{
                alignSelf: 'center'
            }}>
                <h1
                    style={{
                        alignSelf: 'center',
                        textAlign: 'center',

                    }}> Products</h1>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <input
                    style={{
                        borderRadius: 26,
                        borderWidth: 2,
                        borderColor: "#2B547E",
                        width: '20%',
                        height: 35,
                        alignSelf: 'center',
                        marginBottom: 20,
                        padding: 10
                    }}
                    name="id"
                    placeholder="Id"
                    place
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    style={{
                        borderRadius: 26,
                        borderWidth: 2,
                        borderColor: "#2B547E",
                        width: '20%',
                        height: 35,
                        alignSelf: 'center',
                        marginBottom: 20,
                        padding: 10
                    }}
                    name="name"
                    placeholder="Name"
                    place
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    style={{
                        borderRadius: 26,
                        borderWidth: 2,
                        borderColor: "#2B547E",
                        width: '20%',
                        height: 35,
                        alignSelf: 'center',
                        marginBottom: 20,
                        padding: 10
                    }}
                    name="price"
                    placeholder="Price"
                    place
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {/* <TextField
                        onChange={setEmail}
                        margin="dense"
                        onBlur={handleBlur}
                        variant="outlined"
                        error={errors.password && touched.password ? true : false}
                        value={values.password}
                        helperText={
                            errors.password && touched.password ? errors.password : ""
                        }
                        label="Password"
                        name="password"
                        fullWidth
                        type={passwordType}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {passwordType === "password" ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    /> */}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: "50px", width: '10%', alignSelf: 'center' }}
                    onClick={addProduct}>
                    Add Product
                </Button>



            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "80%",
                marginTop: 75,
                marginLeft: 150,
                marginRight: 20
            }}>
                <Link
                    to={`/allProducts`}
                    style={{ textDecoration: "none" }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ borderRadius: "50px", width: '10%', alignSelf: 'center' }}
                    >
                        View Products
                    </Button>
                </Link>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: "50px", width: '10%', alignSelf: 'center' }}
                >
                    Delete Product
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: "50px", width: '10%', alignSelf: 'center' }}
                >
                    Show Product
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: "50px", width: '10%', alignSelf: 'center' }}
                >
                    Last
                </Button>



            </div>
        </div>

    );
}
