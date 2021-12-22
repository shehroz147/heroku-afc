import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { baseUrl } from "../apis/server";
import Avatar from "@material-ui/core/Avatar";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "80vh",
    marginTop: "1%",
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
export default function ScoopTable({ product }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="button">Product Image</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button">Product Title</Typography>
            </TableCell>

            <TableCell align="center">
              <Typography variant="button">Price</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button">Additional Scoop Price</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={product._id}>
            <TableCell component="th" scope="row">
              <Avatar
                src={`${baseUrl}/${product.imageUrl}`}
                variant="square"
                className={classes.square}
              ></Avatar>
            </TableCell>
            <TableCell align="center">{product.title}</TableCell>
            <TableCell align="center">{product.price}</TableCell>
            <TableCell align="center">{product.priceToBeAdded}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
