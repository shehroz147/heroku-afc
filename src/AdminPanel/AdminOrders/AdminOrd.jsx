import React, { useEffect, useState } from "react";

import server from "../../apis/server";
import { Link } from "react-router-dom";
import history from "../../history";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
// import OrderDetails from "./OrderDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  table: {
    minWidth: 650,
  },
  square: {
    width: theme.spacing(11),
    height: theme.spacing(7),
  },
  CircularProgress: {
    position: "absolute",
    top: "55%",
    right: "50%",
    left: "50%",
  },
}));

export default function AdminOrders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("hamzaFlawsToken");
    if (!token) {
      return history.push("/auth/Login");
    }
    server
      .get("/admin/allOrders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setOrders([...res.data.data]);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {loading ? (
        <Box height="100vh">
          <Box className={classes.CircularProgress}>
            <CircularProgress />
          </Box>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Order Number</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="button">Order Date</Typography>
                </TableCell>
                {/* <TableCell align="center">
                <Typography variant="button">items</Typography>
              </TableCell> */}
                <TableCell align="center">
                  <Typography variant="button">Total Bill</Typography>
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>

            {orders.length === 0 ? (
              <Box height="40vh" width="200%" pt={8}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Alert variant="outlined" icon={false} severity="error">
                    Your Cart is Empty Click{" "}
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "primary" }}
                    >
                      {" "}
                      Here
                    </Link>{" "}
                    and Choose Some Products
                  </Alert>
                </Grid>
              </Box>
            ) : (
              <TableBody>
                {orders.map((order) => {
                  return (
                    <>
                      <TableRow key={order._id}>
                        <TableCell component="th" scope="row">
                          {order._id}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-US"
                          )}
                        </TableCell>
                        {/* <TableCell align="center">02</TableCell> */}
                        <TableCell align="center">{order.total} Rs</TableCell>
                        <TableCell align="center">
                          <Link
                            to={`/admin/order/${order.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="contained" color="primary">
                              View Details
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                      {/* <OrderDetails
                        order={order}
                        open={open}
                        setOpen={setOpen}
                      /> */}
                    </>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
