import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import server from "../../apis/server";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import server from "../apis/server";
const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: "300px",
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddCategory({
  open,
  setOpen,
  order,
  setOrder,
  setLoading,
  orders,
  setOrders,
}) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    setLoading(true);
    const orderList = orders.filter((o) => o._id !== order._id);

    const token = window.localStorage.getItem("hamzaFlawsToken");
    try {
      await server.post(
        `/admin/orderStatus/${order._id}`,
        { status: orderStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders([...orderList, { ...order, status: orderStatus }]);
      setOrder(null);

      setLoading(false);
      handleClose();
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert("order status is not chnaged");
    }
  };
  const handleClose = () => {
    setError(false);
    setOpen(false);
    setOrderStatus("");
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        classes={{ paper: classes.dialogPaper }}
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change Status
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Box>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">
                  Order Status
                </InputLabel>
                <Select
                  native
                  value={orderStatus}
                  onChange={(e) => setOrderStatus(e.target.value)}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                  error={error ? true : false}
                >
                  <option value={orderStatus}>
                    {order ? order.status : ""}
                  </option>
                  <option value="delivered">delivered</option>
                  <option value="cancelled">cancelled</option>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              style={{ borderRadius: "50px" }}
              onClick={() => setOpen(true)}
            >
              update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
