import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser, fetchProducts } from "./Actions";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { Router } from "react-router-dom";
import Login from "./Login/Login";
import Orders from "./AdminPanel/AdminOrders/AdminOrders";
import ProductList from "./AdminPanel/ProductsList";
import AddProduct from "./AdminPanel/Product/AddProduct";
import EditProduct from "./AdminPanel/EditProduct/EditProduct";
import Nav from "./Navbar/Nav";
import HomePage from "./Home/HomePage";
import Products from "./Products/Products";
import Sales from "./SalesBill/SalesBill";
import ChooseCompany from "./Chooseomp/Choose";
import Invoice from "./Invoice/Invoice";
import Customers from "./Customers/Customers";
import ComingSoon from "./ComingSoon/ComingSoon";
import NewCustomers from "./Customers/NewCustomers";
import AllProducts from './Products/ViewAllProducts';
import PartiesAccount from "./PartiesAccount/PartiesAccount";
// import AddIcon from "@material-ui/icons/Add";

export default function App() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchProducts());
    //     const token = window.localStorage.getItem("kareydarToken");
    //     if (token) {
    //         dispatch(loggedInUser());
    //     }
    // });
    return (
        <>

            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Login} />


                        <Route path="/Company" component={ChooseCompany} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/products" component={Products} />
                        <Route path="/partiesAccount" component={PartiesAccount} />

                        <Route path="/allProducts" component={AllProducts} />
                        <Route path="/sales" component={Sales} />
                        <Route path="/invoice" component={Invoice} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/newCustomer" component={NewCustomers} />
                        <Route path="/comingSoon" component={ComingSoon} />
                        <Route path="/purchases" component={Sales} />
                        <Route path="/productList" component={ProductList} />
                        <Route path="/addProduct" component={AddProduct} />
                        <Route

                            path="/admin/editProduct/:id"
                            component={EditProduct}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}
