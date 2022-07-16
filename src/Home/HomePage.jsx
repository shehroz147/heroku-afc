import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import server from "../apis/server";
import { Link } from "react-router-dom";
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
import Team from '../team-2.jpg';
import Picture from '../familylaw.png';
import Product from '../product.png';
import User from '../user.png';
import Sales from '../sales.png';
import Customers from '../customers.jpg';
import Purchase from '../purchase.png';
import { useDispatch } from "react-redux";
import { signIn } from "../Actions";
import Logo from '../Logo.jpg';
import Background from '../background.jpeg';
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

export default function HomePage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const classes = useStyles();
    const [passwordType, setPasswordType] = useState("password");
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const Login = async () => {

        const values = {
            email: email,
            password: password
        }
        const { data } = await server.post("Admin/login", values);
        console.log(data)
        dispatch(signIn(data.result._id, data.token));
    }


    const closeAlert = () => {
        setOpenAlert(false);
    };
    const handleClickShowPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    let validationSchema = yup.object({
        email: yup.string().email().required("email is required"),
        password: yup.string().required("Password is required"),
    });
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await server.post("Admin/login", values);
                console.log(data)
                dispatch(signIn(data.result._id, data.token));
                // console.log(data.user);
                // console.log(data.result._id);
                // console.log(data);
                setLoading(false);
                resetForm({
                    values: "",
                });
            } catch (e) {
                console.log(e.message);
                setLoading(false);
                setOpenAlert(true);
            }
        },
    });

    return (
        <div >
            <h1 style={{
                marginLeft: 220,
                marginTop: 100
            }}>CHAUDHARY AMIR BROS. COMMISSION AGENT GRAIN MARKET</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                justifyContent: 'space-between',
                marginLeft: 250,
                marginRight: 250,
                marginTop: 50

            }}>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                    <Link
                        to={`/products`}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={Product}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 25
                            }}
                        />
                        <p style={{
                            color: '#2B547E',
                            fontSize: 22,
                            fontWeight: 'bold',
                            padding: 10,
                            borderColor: '#2B547E',
                            borderWidth: 2,
                            border: 'solid',
                            borderRadius: 36

                        }}>Products</p>
                    </Link>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                    <Link
                        to={`/sales`}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={Sales}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 25
                            }}
                        />
                        <p style={{
                            color: '#2B547E',
                            fontSize: 22,
                            fontWeight: 'bold',
                            padding: 10,
                            borderColor: '#2B547E',
                            borderWidth: 2,
                            border: 'solid',
                            borderRadius: 36

                        }}>VOUCHER ENTRY</p>
                    </Link>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>

                    <img
                        src={Purchase}
                        style={{
                            width: 100,
                            height: 100,
                            margin: 25
                        }}
                    />
                    <p style={{
                        color: '#2B547E',
                        fontSize: 22,
                        fontWeight: 'bold',
                        padding: 10,
                        borderColor: '#2B547E',
                        borderWidth: 2,
                        border: 'solid',
                        borderRadius: 36

                    }}>CASH VOUCHER</p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                justifyContent: 'space-between',
                marginLeft: 250,
                marginRight: 250,
                marginTop: 50

            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                    <Link
                        to={`/partiesAccount`}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={Purchase}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 25
                            }}
                        />
                        <p style={{
                            color: '#2B547E',
                            fontSize: 22,
                            fontWeight: 'bold',
                            padding: 10,
                            borderColor: '#2B547E',
                            borderWidth: 2,
                            border: 'solid',
                            borderRadius: 36

                        }}>PURCHASES</p>
                    </Link>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                    <Link
                        to={`/invoice`}
                        style={{ textDecoration: "none" }}
                    >

                        <img
                            src={Sales}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 25
                            }}
                        />
                        <p style={{
                            color: '#2B547E',
                            fontSize: 22,
                            fontWeight: 'bold',
                            padding: 10,
                            borderColor: '#2B547E',
                            borderWidth: 2,
                            border: 'solid',
                            borderRadius: 36

                        }}>SALES</p>
                    </Link>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                    <Link
                        to={`/customers`}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={Customers}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 25
                            }}
                        />
                        <p style={{
                            color: '#2B547E',
                            fontSize: 22,
                            fontWeight: 'bold',
                            padding: 10,
                            borderColor: '#2B547E',
                            borderWidth: 2,
                            border: 'solid',
                            borderRadius: 36

                        }}>Customers</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
