import React, { useState, useEffect,useRef } from "react";
import { deleteProduct } from "../Actions";
import history from "../history";
import Grid from "@material-ui/core/Grid";
import ProductDetails from "../Components/ProductDetailes";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Pagination from "../Components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ReactToPrint from "react-to-print";
import  Button  from "react";

import _ from "lodash";

import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "80vh",
    marginTop: "1%",
  },
  table: {
    minWidth: 650,
    marginTop:100,
    marginLeft:200,
    textAlign:'centre'
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

export default function ProductsList() {
  const classes = useStyles();
  let componentRef = useRef();
  const user = useSelector((state) => state.auth);
  // console.log("user = ",user);
  const productData = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [postsPerPage] = useState(8);
  const dispatch = useDispatch();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log(productData)
  useEffect(() => {
    const token = window.localStorage.getItem("peraToken");
    if(!token || user.role==="user")
    {
      history.push('/');
    }
  }, [setLoading, productData, user]);
  const handleProductEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };

  const handleProductDelete = (id) => {
    setLoading(true);
    dispatch(deleteProduct(id, setLoading));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // let currentProducts = [];
  // console.log(productData);
  // if (!_.isEmpty(productData)) {
  //   console.log("product data:",productData);
  //   currentProducts = productData.slice(
  //     indexOfFirstPost,
  //     indexOfLastPost
  //   );
  // }
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container maxWidth="lg">
      {_.isEmpty(productData) || loading ? (
        <Box height="100vh">
          <Box className={classes.CircularProgress}>
            <CircularProgress color="primary" />
          </Box>
        </Box>
      ) : productData.result.length === 0 ? (
        <Grid container direction="row" justify="center" alignItems="center">
          You have not added any product yet
        </Grid>
                
      ) : (
        productData.result.map((product) => {
          // console.log(product);
          return (
            <Accordion
              expanded={expanded === product._id}
              onChange={handleChange(product._id)}
              className={classes.root}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{marginRight:1000,marginTop:12}} className={classes.heading}>
                  {product.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  <IconButton
                    variant="outlined"
                    color="primary"
                    onClick={() => handleProductEdit(product._id)}
                  >
                    <EditIcon />
                  </IconButton>
            <div>
                  {/* <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        /> */}

        {/* component to be printed */}
        {/* <ProductsList ref={(el) => (componentRef = el)} /> */}
      </div>
                  <IconButton
                  aria-label="delete"
                  color="secondary"
                    // variant="outlined"
                    // color="primary"
                    onClick={() => handleProductDelete(product._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProductDetails product={product} />
                {/* console.log(product); */}
              </AccordionDetails>
            </Accordion>
          );
        })
      )}

      {!_.isEmpty(productData) && productData.result.length > postsPerPage ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={productData.result.length}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </Container>
  );
}
