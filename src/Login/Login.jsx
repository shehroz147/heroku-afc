import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import server from "../apis/server";
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
import Background from '../house.png';
// import history from "../history";
import './Login.css'

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

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState("password");
    const Login = async () => {
        const values = {
            email: email,
            password: password
        }
        console.log(values);
        const data = await server.post("user/login", values);
        console.log(data.status)
        if (data.status === 200) {
            alert('Welcome Admin!');
            history.push("/Company")

        }
        else {
            alert('Wrong Email or Password')
            history.push('/')
        }
        // dispatch(signIn(data.result._id, data.token));
    }


    let validationSchema = yup.object({
        email: yup.string().email().required("email is required"),
        password: yup.string().required("Password is required"),
    });



    // const {
    //     values,
    //     errors,
    //     touched,
    //     handleBlur,
    //     handleChange,
    //     handleSubmit,
    // } = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //     },

    //     validationSchema,
    //     onSubmit: async (values, { resetForm }) => {
    //         try {
    //             const data = await server.post("Admin/login", values);
    //             console.log(data)
    //             dispatch(signIn(data.result._id, data.token));
    //             // console.log(data.user);
    //             // console.log(data.result._id);
    //             // console.log(data);
    //             setLoading(false);
    //             resetForm({
    //                 values: "",
    //             });
    //         } catch (e) {
    //             console.log(e.message);
    //             setLoading(false);
    //             setOpenAlert(true);
    //         }
    //     },
    // });

    return (
        <div style={{
            // height: '100%',
            // width: '100%',
            paddingTop: 100,
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: '1000px',
        }}>
            <div style={{
                alignSelf: 'center'
            }}>
                <img
                    src={Logo}
                    className="logo-img"
                />
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 col-8">
                            <input
                                className="login-input"
                                name="email"
                                placeholder="Email"
                                place
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 col-8">
                            <input
                                className="login-input"
                                // onBlur={handleBlur}
                                name="password"
                                placeholder="Password"
                                place
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>



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
                <div className="text-center mt-2">
                    <Link
                        to={`/company`}
                        style={{ textDecoration: "none" }}
                    >
                        <button
                            onClick={Login}
                            variant="contained"
                            type="submit"
                            className="px-5 py-2 btn btn-primary"
                            style={{ borderRadius: "50px" }}
                        >
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>


        </div>

    );
}
