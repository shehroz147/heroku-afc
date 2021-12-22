import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../Actions";
import { FileResize } from "../../utils/ImageCompressor";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import FormHelperText from "@material-ui/core/FormHelperText";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "@material-ui/core/Container";
import server, { baseUrl } from "../../apis/server";
import history from "../../history";
const drawerWidth = 340;
const useStyles = makeStyles((theme) => ({
  CircularProgress: {
    position: "absolute",
    top: "55%",
    right: "50%",
    left: "50%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  adminUploadButton: { position: "absolute", bottom: "10px", right: "20px" },
  addProductForm: {
    minHeight: "80vh",
    margin: "0 auto",
  },
  input: {
    display: "none",
  },
  show: {
    display: "flex",
  },
  imageUploadMainContainer: {
    position: "relative",
  },
  centerUploadButton: {
    position: "absolute",
    top: "40%",
    left: "45%",
  },
}));
export default function EditProduct(props) {
  const user = useSelector((state) => state.auth);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    largePrice: "",
    regularPrice: "",
    priceToBeAdded: "",
    imageUrl: "",
  });
  const categoryList = [
    { id: 1, name: "Ice Cream -Scoop" },
    { id: 2, name: "Ice Cream - Karen's Kulfi" },
    { id: 3, name: "HAMZA SPECIAL TEA" },
    { id: 4, name: "PAAN" },
    { id: 5, name: "FOOD" },
    { id: 6, name: "Ice Cream - Tubs" },
    { id: 7, name: "FALOODA" },
    { id: 8, name: "SHAKES" },
    { id: 9, name: "HAMZA SPECIAL JUICE" },
    { id: 10, name: "FRESH JUICES" },
    { id: 11, name: "SOUP" },
    { id: 12, name: "CHAAT" },
  ];

  const [selectedFiles, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log(uploadedImages.length);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const token = window.localStorage.getItem("hamzaFlawsToken");

    if (!token || !user.role === "admin") {
      return history.push("/");
    }
  });
  useEffect(() => {
    server
      .get(`/shop/getProduct/${props.match.params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [props.match.params.id]);

  const handleFile = (e) => {
    setFiles(e.target.files[0]);
  };

  let validationSchema = yup.object({
    title: yup.string().required("Product name is required"), //maximum number of letters .max(54,"name cannot be more then 54 charcters long")
    price: yup.number().notRequired("price is required"),
    category: yup.string().required("category is required"),
    largePrice: yup.number().notRequired("largePrice is required"),
    regularPrice: yup
      .number()
      .notRequired(
        "regularPrice is not only apply if you want to offer regularPrice"
      ),
    priceToBeAdded: yup.number().notRequired("size is required"),
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
      title: product.title,
      price: product.price ? product.price : "",
      category: product.category,
      largePrice: product.largePrice ? product.largePrice : "",
      regularPrice: product.regularPrice ? product.regularPrice : "",
      priceToBeAdded: product.priceToBeAdded ? product.priceToBeAdded : "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const data = new FormData();

      data.append("obj", JSON.stringify(values));
      if (selectedFiles) {
        const img = await FileResize(selectedFiles);
        data.append("image", img);
      }
      dispatch(editProduct(product._id, data, setLoading));

      resetForm({
        values: "",
      });
      setFiles(null);
    },
  });

  return (
    <>
      <Container maxWidth="lg">
        {loading ? (
          <Box height="100vh">
            <Box className={classes.CircularProgress}>
              <CircularProgress />
            </Box>
          </Box>
        ) : (
          <Box width="85%" className={classes.addProductForm}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-required"
                label="Title"
                name="title"
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title && touched.title ? true : false}
                helperText={errors.title && touched.title ? errors.title : ""}
              />
              <Box mt={1} mb={1}>
                <Box width="100%">
                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Category
                    </InputLabel>

                    <Select
                      id="demo-simple-select"
                      inputProps={{
                        name: "category",
                        id: "age-simple",
                      }}
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.category && touched.category ? true : false}
                    >
                      {categoryList.map((category) => (
                        <MenuItem value={category.name}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.category && touched.category ? (
                      <FormHelperText> {errors.category} </FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </Box>
              </Box>

              <TextField
                id="outlined-required"
                label="Price"
                name="price"
                variant="outlined"
                fullWidth
                margin="dense"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.price && touched.price ? true : false}
                helperText={errors.price && touched.price ? errors.price : ""}
              />
              {/* {category === "FALOODA" ||
              category === "FRESH" ||
              category === "JUICES" ||
              category === "SHAKES" ||
              category === "HAMZA SPECIAL JUICE" ||
              category === "CHAAT" ||
              category === "SOUP" ? ( */}
              <Box className={classes.show}>
                <Box width="50%">
                  <TextField
                    variant="outlined"
                    margin="dense"
                    name="largePrice"
                    label="largePrice"
                    value={values.largePrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.largePrice && touched.largePrice ? true : false
                    }
                    helperText={
                      errors.largePrice && touched.largePrice
                        ? errors.largePrice
                        : ""
                    }
                    fullWidth
                  />
                </Box>

                <Box width="50%" ml={1}>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    name="regularPrice"
                    label="regularPrice"
                    value={values.regularPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.regularPrice && touched.regularPrice ? true : false
                    }
                    fullWidth
                  />
                </Box>
              </Box>
              {/* ) : (
                ""
              )} */}
              <TextField
                id="standard-multiline-static"
                label="Scoop Price To be added"
                name="priceToBeAdded"
                multiline
                variant="outlined"
                margin="dense"
                // rows={5}
                fullWidth
                value={values.priceToBeAdded}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.priceToBeAdded && touched.priceToBeAdded ? true : false
                }
                helperText={
                  errors.priceToBeAdded && touched.priceToBeAdded
                    ? errors.priceToBeAdded
                    : ""
                }
              />

              <Box mt={2}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  // multiple
                  type="file"
                  name="image"
                  onChange={(e) => handleFile(e)}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    upload
                  </Button>
                </label>
              </Box>

              <Box mt={2}>
                {/* {selectedFiles.length !== 0 */}
                {selectedFiles ? (
                  // selectedFiles.map((file, index) => (
                  <>
                    <div className={classes.box}>
                      <Avatar
                        variant="square"
                        alt="main_Image"
                        src={URL.createObjectURL(selectedFiles)}
                        className={classes.large}
                      />

                      {/* <CancelIcon
                        className={classes.icon}
                        onClick={() => handleDelete()}
                      /> */}
                    </div>
                  </>
                ) : (
                  // ))
                  <div className={classes.box}>
                    <Avatar
                      variant="square"
                      alt="main_Image"
                      src={baseUrl + "/" + product.imageUrl}
                      className={classes.large}
                    />

                    {/* <CancelIcon
                        className={classes.icon}
                        onClick={() => handleDelete()}
                      /> */}
                  </div>
                )}
              </Box>

              <Box mt={2} mb={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ borderRadius: "50px" }}
                  type="submit"
                >
                  Update product
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Container>
    </>
  );
}
