import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser, fetchProducts } from "./Actions";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Login from "./Login/Login";
import Orders from "./AdminPanel/AdminOrders/AdminOrders";
import ProductList from "./AdminPanel/ProductsList";
import AddProduct from "./AdminPanel/Product/AddProduct";
import EditProduct from "./AdminPanel/EditProduct/EditProduct";
import Nav from "./Navbar/Nav";

// import AddIcon from "@material-ui/icons/Add";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    const token = window.localStorage.getItem("hamzaFlawsToken");
    if (token) {
      dispatch(loggedInUser());
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/productList" component={ProductList} />
            <Route exact path="/addProduct" component={AddProduct} />

            <Route
              exact
              path="/admin/editProduct/:id"
              component={EditProduct}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
