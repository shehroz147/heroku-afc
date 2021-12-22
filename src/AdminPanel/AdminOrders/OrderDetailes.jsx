import React from "react";

import ProductDetails from "../../Components/ProductDetailes";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";

export default function OrderDetailes({ order }) {
  // alert(JSON.stringify(order))
  return (
    <Container maxWidth="lg">
      {order ? (
        <>
          <Typography variant="h5" gutterBottom key="7656" align="center">
            Order Detailes
          </Typography>

          <Grid container>
            <Grid item sm={6}>
              <Box
                border="1px solid white"
                borderRadius="4px"
                //   style={{ backgroundColor: "#FFFFFF" }}
                mb={2}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  User Information
                </Typography>
                <Box>
                  <Typography variant="body1" align="center">
                    Name: {order.userId.firstName} {order.userId.lastName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" align="center">
                    Cantact: {order.userId.contactDetails}
                  </Typography>
                </Box>

                {/* <Box>
                    <Typography variant="subtitle" align="center">
                      Total Bill: {order.total}
                    </Typography>
                  </Box> */}
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box
                border="1px solid white"
                borderRadius="4px"
                //   style={{ backgroundColor: "#FFFFFF" }}
                mb={2}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  Shipping Address
                </Typography>
                <Box>
                  <Typography variant="body1" align="center" gutterBottom>
                    Address: {order.userId.shippingAddress}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" align="center">
                    City: {order.userId.city}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box mt={2}></Box>

          {order
            ? order.products.map((product) => {
                return <ProductDetails product={product} />;
              })
            : ""}

          <TableRow>
            <TableCell>
              <Typography variant="button">Total Bill</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button"></Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button"></Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="button"> {order.total} Rs</Typography>
            </TableCell>
          </TableRow>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
