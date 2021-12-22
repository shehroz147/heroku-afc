import React, { useEffect, useState } from "react";
import OrderDetails from "./OrderDetailes";
import OrderEditAler from "./OrderEditAler";
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment'
import { toTitleCase } from "../../utils/CamelCase";
import server from "../../apis/server";
import { useSelector } from "react-redux";
import history from "../../history";
// import Alert from "@material-ui/lab/Alert";
import Accordion from "@material-ui/core/Accordion";
import Container from "@material-ui/core/Container";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "70vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "33.33%",
    color: "#F64657",
    flexShrink: 0,
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  CircularProgress: {
    position: "absolute",
    top: "55%",
    right: "50%",
    left: "50%",
  },
  orderDetaileBox: {
    display: "flex",
  },
  orderInformation: {
    display: "flex",
    marginRight: "10px",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const [expanded, setExpanded] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("hamzaFlawsToken");
    if (!token || user.user.role !== "admin") {
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
  }, [user.user.role]);

  const onOrderStatusChangeSelect = (order) => {
    setOrder(order);
    setOpen(true);
  };
  const onOrderDelet = async (id) => {
    setLoading(true);
    const orderList = orders.filter((o) => o._id !== id);

    const token = window.localStorage.getItem("hamzaFlawsToken");
    try {
      await server.delete(
        `/admin/order/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders([...orderList]);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert("order status is not deleted");
    }
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {loading ? (
          <Box height="100vh">
            <Box className={classes.CircularProgress}>
              <CircularProgress />
            </Box>
          </Box>
        ) : orders.length === 0 ? (
          // <Box height="40vh" width="200%" pt={8}>
          <Grid container direction="row" justify="center" alignItems="center">
            You have not recieved any order yet
          </Grid>
        ) : (
          // </Box>
          orders.map((order) => {
            return (
              <Accordion
                expanded={expanded === order._id}
                onChange={handleChange(order._id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    {toTitleCase(order.status)}
                  </Typography>

                  <Typography className={classes.heading}>
                    {toTitleCase(moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a'))}
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    {/* <Button
                      variant="outlined"
                      type="button"
                      onClick={(e) =>
                        onOrderStatusChange("ioasuhuadsc", "hjcssguc")
                      }
                    >
                      {" "}
                      Change Order Status
                    </Button> */}
                    <IconButton
                      variant="outlined"
                      onClick={() => onOrderStatusChangeSelect(order)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      onClick={() => onOrderDelet(order._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <OrderDetails order={order} />
                </AccordionDetails>
              </Accordion>
            );
          })
        )}
        <OrderEditAler
          open={open}
          setOpen={setOpen}
          order={order}
          setOrder={setOrder}
          setLoading={setLoading}
          orders={orders} //array of all orders needed to be updated when status changes
          setOrders={setOrders}
          // onOrderStatusChangeSelect={onOrderStatusChangeSelect}
        />
      </Container>
    </div>
  );
}
