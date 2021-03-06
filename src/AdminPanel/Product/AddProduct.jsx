import React, { useState, useEffect, onPress } from "react";
import history from "../../history";
import { storage, auth } from '../../firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
// import CancelIcon from "@material-ui/icons/Cancel";
// import { FileResize } from "../../utils/ImageCompressor";
import { createProduct } from "../../Actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import {onPress} from "react-native";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useFormik } from "formik";
import * as yup from "yup";
import Container from "@material-ui/core/Container";
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
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    box: {
        width: theme.spacing(10),
        height: theme.spacing(11),
        position: "relative",
    },
    icon: {
        position: "absolute",
        right: 0,
        top: 0,
        fontSize: "14px",
        cursor: "pointer",
        // color: "white",
    },
}));
export default function AddProduct() {
<<<<<<< HEAD
    const user = useSelector((state) => state.auth);
    const categoryList = [
        { id: 1, name: "Poultry" },
        { id: 2, name: "Lamb" },
        { id: 3, name: "Mutton" },
        { id: 4, name: "Beef" },
        { id: 5, name: "Offal" },
        { id: 6, name: "Marrinated" },
    ];

    const skinOptions = [
        { id: 1, name: "True" },
        { id: 2, name: "False" },
    ];

    const cuttingOptions = [
        { id: 1, name: "Cubes" },
        { id: 2, name: "2x" },
        { id: 3, name: "4x" }
    ];
=======
  const user = useSelector((state) => state.auth);
  const categoryList = [
    { id: 1, name: "Health" },
    { id: 2, name: "Fitness" },
    { id: 3, name: "Better Life" },
    { id: 4, name: "Be Strong" },
    { id: 5, name: "Your Time" },
    { id: 6, name: "Gym Beast" },
  ];

  useEffect(() => {
    const token = window.localStorage.getItem("peraToken");

    if (!token || !user.role === "Admin") {
      return history.push("/");
    }
  });
  // const [category, setCategory] = useState("");
  const [selectedFiles, setFiles] = useState();
  const [url, setURL] = useState("");
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8

    // const weightOptions = [
    //     {id:}
    // ]
    useEffect(() => {
        const token = window.localStorage.getItem("kareydarToken");

<<<<<<< HEAD
        if (!token || !user.role === "admin") {
            return history.push("/");
        }
=======
  const handleFile = (e) => {
    setFiles(e.target.files[0]);
  };

  let validationSchema = yup.object({
    title: yup.string().required("Product name is required"), //maximum number of letters .max(54,"name cannot be more then 54 charcters long")
    price: yup.number().required("price is required"),
    tag: yup.string().required("Tag is required"),
    description: yup.string(),
    additionalInfo: yup.string(),
  //  imageUrl:yup.string().required("imageUrl is required")
    // largePrice: yup.number().notRequired("largePrice is required"),
    // regularPrice: yup
    //   .number()
    //   .notRequired(
    //     "regularPrice is not only apply if you want to offer regularPrice"
    //   ),
    // priceToBeAdded: yup.number().notRequired("size is required"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        price: "",
        tag: "",
        
        // largePrice: "",
        // regularPrice: "",
        // priceToBeAdded: "",
        // size: "",
      },
      enableReinitialize: true,
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
        auth.signInAnonymously()
  .then(() => {
    // Signed in..
    // const data = values
    const uploadTask =   storage.ref(`/images/${selectedFiles.name}`).put(selectedFiles);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(selectedFiles.name)
        .getDownloadURL()
        .then((url) => {
          setFiles(null);
          setURL(url); 
          alert(url)
          // console.log(data);
          // const data = new FormData();



          // for (var propName in values) {
          //   //to remove any empty field
          //   if (values[propName] === "") {
          //     delete values[propName];
          //   }
          // }
          // values.append("obj", JSON.stringify({...values,image:url}));
          // const img =  FileResize(selectedFiles);
          // data.append("image", img);
          // console.log("aur bhaui")

          // values['imageUrl']=url,

          // alert(JSON.stringify(values))
            
          // const val = values
          // data['imageUrl'] = val

          dispatch(createProduct(values,url, setLoading));
  
          // resetForm({
          //   values: "",
          // });
          // history.push("/productList");
          setFiles(null);
        })
      })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
 




 
        // alert()
       
      },
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8
    });
    // const [category, setCategory] = useState("");
    const [selectedFiles, setFiles] = useState();
    const [url, setURL] = useState("");
    const [skinOption, setSkinOption] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

<<<<<<< HEAD
    const handleFile = (e) => {
        setFiles(e.target.files[0]);
    };

    let validationSchema = yup.object({
        title: yup.string().required("Product name is required"), //maximum number of letters .max(54,"name cannot be more then 54 charcters long")
        price: yup.number().required("price is required"),
        category: yup.string().required("category is required"),
        skinOptions: yup.string().required("Skin Option is required"),
        cuttingOptions: yup.string().required("Cutting options required")

        //  imageUrl:yup.string().required("imageUrl is required")
        // largePrice: yup.number().notRequired("largePrice is required"),
        // regularPrice: yup
        //   .number()
        //   .notRequired(
        //     "regularPrice is not only apply if you want to offer regularPrice"
        //   ),
        // priceToBeAdded: yup.number().notRequired("size is required"),
    });
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                title: "",
                price: "",
                category: "",
                skinOptions: "",
                cuttingOptions: "",
                // largePrice: "",
                // regularPrice: "",
                // priceToBeAdded: "",
                // size: "",
            },
            enableReinitialize: true,
            validationSchema,
            onSubmit: async (values, { resetForm }) => {
                auth.signInAnonymously()
                    .then(() => {
                        // Signed in..
                        // const data = values
                        const uploadTask = storage.ref(`/images/${selectedFiles.name}`).put(selectedFiles);
                        uploadTask.on("state_changed", console.log, console.error, () => {
                            storage
                                .ref("images")
                                .child(selectedFiles.name)
                                .getDownloadURL()
                                .then((url) => {
                                    setFiles(null);
                                    setURL(url);
                                    alert(url)
                                    // console.log(data);
                                    // const data = new FormData();



                                    // for (var propName in values) {
                                    //   //to remove any empty field
                                    //   if (values[propName] === "") {
                                    //     delete values[propName];
                                    //   }
                                    // }
                                    // values.append("obj", JSON.stringify({...values,image:url}));
                                    // const img =  FileResize(selectedFiles);
                                    // data.append("image", img);
                                    // console.log("aur bhaui")

                                    // values['imageUrl']=url,

                                    // alert(JSON.stringify(values))

                                    // const val = values
                                    // data['imageUrl'] = val

                                    dispatch(createProduct(values, url, setLoading));

                                    // resetForm({
                                    //   values: "",
                                    // });
                                    // history.push("/productList");
                                    setFiles(null);
                                })
                        })
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                    });






                // alert()

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
                        <form>
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

                            <Box width="100%">
                                <FormControl variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Skin Options
                                    </InputLabel>

                                    <Select
                                        id="demo-simple-select"
                                        inputProps={{
                                            name: "skinOptions",
                                            id: "age-simple",
                                        }}
                                        value={values.skinOptions}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {skinOptions.map((category) => (
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

                            <Box width="100%">
                                <FormControl variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Cutting Options
                                    </InputLabel>

                                    <Select
                                        id="demo-simple-select"
                                        inputProps={{
                                            name: "cuttingOptions",
                                            id: "age-simple",
                                        }}
                                        value={values.cuttingOptions}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {cuttingOptions.map((category) => (
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
=======
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
            <form>
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
                      Tag
                    </InputLabel>

                    <Select
                      id="demo-simple-select"
                      inputProps={{
                        name: "category",
                        id: "age-simple",
                      }}
                      value={values.tag}
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
              <TextField
                id="outlined-required"
                label="Description"
                name="description"
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={errors.price && touched.price ? true : false}
                // helperText={errors.price && touched.price ? errors.price : ""}
              />
              <TextField
                id="outlined-required"
                label="Additional Info"
                name="additionalInfo"
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={values.additionalInfo}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={errors.price && touched.price ? true : false}
                // helperText={errors.price && touched.price ? errors.price : ""}
              />
              {/* {category === "FALOODA" ||
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8
              category === "FRESH" ||
              category === "JUICES" ||
              category === "SHAKES" ||
              category === "HAMZA SPECIAL JUICE" ||
              category === "CHAAT" ||
              category === "SOUP" ? ( */}
                            {/* <Box className={classes.show}>
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
              </Box> */}
                            {/* ) : (
                ""
              )} */}
                            {/* {values.category === "Ice Cream -Scoop" ? (
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
                    errors.priceToBeAdded && touched.priceToBeAdded
                      ? true
                      : false
                  }
                  helperText={
                    errors.priceToBeAdded && touched.priceToBeAdded
                      ? errors.priceToBeAdded
                      : ""
                  }
                />
              ) : (
                ""
              )} */}
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
                                    ""
                                )}
                            </Box>

                            <Box mt={2} mb={1}>
                                <Button
                                    onClick={handleSubmit}
                                    variant="outlined"
                                    color="primary"
                                    style={{ borderRadius: "50px" }}
                                    type="submit"
                                >
                                    Create product
                                </Button>
                            </Box>
                        </form>
                    </Box>
                )}
            </Container>
        </>
    );
}
