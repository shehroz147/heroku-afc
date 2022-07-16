import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from '../Logo.jpg';
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../Actions";
import auth from "../firebase/firebase";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        // fontFamily: "Pacifico",
        width: theme.spacing(10),
        height: theme.spacing(10),
        // "@media (max-width: 598px)": {
        //   display: "none",
        // },
        "@media (max-width: 1030px)": {
            position: "absolute",
            left: "50%",
            right: "50%",
            top: 0,
        },
    },

    drawerLogo: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: "-40px auto 10px",
    },
    search: {
        marginLeft: "3em",
        borderRadius: "50px",
        border: "1px solid #e2e2e2",
        width: "40%",
        "@media (max-width: 598px)": {
            width: "80%",
            marginLeft: "1em",
        },
    },
    icons: {
        marginLeft: "10em",
        "@media (max-width: 1030px)": {
            position: "absolute",
            right: "0",
        },
        "@media (max-width: 598px)": {
            display: "none",
        },
    },
    authButtons: {
        position: "absolute",
        right: "0",
        "@media (max-width: 1030px)": {
            display: "none",
        },
    },
    menuButton: {
        display: "none",
        "@media (max-width: 1030px)": {
            display: "block",
        },
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
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
        justifyContent: "flex-end",
    },
    link: {
        textDecoration: "none",
        marginRight: "25px",
        color: "black",
        fontSize: "17px",
    },
}));
// window.innerWidth < 1030?
export default function Nav() {
    const classes = useStyles();
    const user = useSelector((state) => state.auth);
    console.log(user.user);
    const dispatch = useDispatch();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawer = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const handleLogout = () => {
        dispatch(signOut());
    };

    return (
        <div style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <img
                alt="logo"
                src={Logo}
                style={{
                    alignSelf: 'center',
                    width: 300,
                    heigth: 300
                }} />





        </div >
    );
}
