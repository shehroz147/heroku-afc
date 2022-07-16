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
import User from '../agent.png';
import Sales from '../pesticides.png';
import Purchase from '../purchase.png';
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

export default function ChooseCompany() {
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
        <div>
            <h1 style={{
                marginTop: 100,
                textAlign: 'center',
                color: '#2B547E',
                fontWeight: 'bold'
            }}>CHAUDHARY AMIR ALI BROTHERS</h1>
            <div style={{
                // display: 'flex',
                // flexDirection: 'row',
                // height: '100%',
                // justifyContent: 'space-between',
                // marginLeft: 250,
                // marginRight: 250,
                // marginTop: 50

            }} className="d-flex row justify-content-around">

                <div className="col-md-6">
                    <div
                        style={{
                            // display: 'flex',
                            // flexDirection: 'column',
                            // justifyContent: 'space-between'
                        }} className="d-flex justify-content-center">
                        <Link
                            to={`/home`}
                            style={{ textDecoration: "none" }}
                        >
                            <img
                                src={User}
                                style={{
                                    width: 150,
                                    height: 150,
                                    margin: "0 auto"
                                }}
                                className="img-fluid d-block "
                            />
                            <p style={{
                                color: '#2B547E',
                                fontSize: 22,
                                fontWeight: 'bold',
                                padding: 10,
                                // borderColor: '#2B547E',
                                // borderWidth: 2,
                                // border: 'solid',
                                borderRadius: '36px',
                                border: "2px solid #2B547E",
                                textAlign: "center",
                                width: "100%"
                            }} className="px-3 mt-2">COMMISSION AGENT</p>
                        </Link>
                    </div>
                </div>

                <div className="col-md-6">
                    <div
                        style={{
                            // display: 'flex',
                            // flexDirection: 'column',
                            // justifyContent: 'space-between'
                        }} className="d-flex justify-content-center">
                        <Link
                            to={`/comingSoon`}
                            style={{ textDecoration: "none" }}
                        >
                            <img
                                src={Sales}
                                style={{
                                    width: "80px",
                                    height: "150px",
                                    margin: "0 auto"
                                }}
                                className="img-fluid d-block "
                            />
                            <p style={{
                                color: '#2B547E',
                                fontSize: 22,
                                fontWeight: 'bold',
                                padding: 10,
                                // borderColor: '#2B547E',
                                // borderWidth: 2,
                                // border: 'solid',
                                borderRadius: '36px',
                                border: "2px solid #2B547E",
                                textAlign: "center",
                                width: "100%"

                            }} className="px-5 mt-2">PESTICIDES</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
