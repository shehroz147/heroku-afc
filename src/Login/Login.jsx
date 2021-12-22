import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),

    marginBottom: "5px",
  },

  CircularProgress: {
    position: "absolute",
    top: "55%",
    right: "50%",
    left: "50%",
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [passwordType, setPasswordType] = useState("password");
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
      setLoading(true);
      try {
        const { data } = await server.post("/login", values);
        dispatch(signIn(data.user, data.token));
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
    <Container maxWidth="sm" className={classes.root}>
      {loading ? (
        <Box className={classes.CircularProgress}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          <Snackbar
            open={openAlert}
            style={{ position: "absolute", top: "60px" }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={6000}
            onClose={closeAlert}
          >
            <Alert severity="error">
              you have entered wrong email or password
            </Alert>
          </Snackbar>
          <Box className={classes.center}>
            <Box width="100%" mt={13}>
              <Typography variant="h5" gutterBottom align="center">
                Welcome To Admin Panel
              </Typography>
            </Box>
            <Box width="100%" height="100px" mt={2} mb={1}>
              <Grid
                direction="row"
                container
                justify="center"
                alignItems="center"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={process.env.PUBLIC_URL + "./logo.png"}
                  className={classes.large}
                />
              </Grid>
            </Box>
            {/* <Box></Box> */}
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "2em" }}
            >
              <Box width="70%" style={{ margin: "0 auto" }}>
                <TextField
                  margin="dense"
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email && touched.email ? true : false}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </Box>

              <Box width="70%" style={{ margin: "0 auto" }}>
                <TextField
                  onChange={handleChange}
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
                />
              </Box>

              <Box mt={2} mb={1}>
                <Grid
                  direction="row"
                  container
                  justify="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: "50px" }}
                  >
                    signin
                  </Button>
                </Grid>
              </Box>
            </form>
          </Box>
        </>
      )}
    </Container>
  );
}
