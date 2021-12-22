import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

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
    <div className={classes.root}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        style={{ color: "gray" }}
      >
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              {/* <Typography variant="h6" className={classes.title}>
                unsticher
              </Typography> */}
              <Avatar
                alt="logo"
                src={process.env.PUBLIC_URL + "./logo.png"}
                className={classes.title}
              />
            </Link>

            <div className={classes.authButtons}>
              {user.user && user.user.role === "admin" ? (
                <>
                  <Link to="/productList" className={classes.link}>
                    Product List
                  </Link>

                  <Link to="/addProduct" className={classes.link}>
                    Add Product
                  </Link>
                  <Link to="/orders" className={classes.link}>
                    Orders
                  </Link>
                </>
              ) : (
                ""
              )}
              {/* </div>

            <div className={classes.authButtons}> */}
              {user.isSignedIn === false ? (
                <>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: "50px" }}
                    >
                      signin
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ borderRadius: "50px" }}
                    onClick={handleLogout}
                  >
                    Signout
                  </Button>
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <Divider />
      <Hidden>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <div>
            <Avatar
              alt="logo"
              src={process.env.PUBLIC_URL + "./logo.png"}
              className={classes.drawerLogo}
            />
          </div>
          <List component="nav" aria-label="main mailbox folders">
            {user.user && user.user.role === "admin" ? (
              <>
                <Link to="/productList" style={{ textDecoration: "none" }}>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText
                      primary="Product List"
                      style={{ color: "black" }}
                    />
                  </ListItem>
                </Link>
                <Divider />
                <Link to="/addProduct" style={{ textDecoration: "none" }}>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText
                      primary="Add Product"
                      style={{ color: "black" }}
                    />
                  </ListItem>
                </Link>
                <Divider />
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Orders" style={{ color: "black" }} />
                  </ListItem>
                </Link>
              </>
            ) : (
              ""
            )}
            <Divider />

            {user.isSignedIn === false ? (
              <>
                <Link
                  to="/auth/Login"
                  color="primary"
                  style={{ textDecoration: "none" }}
                >
                  <ListItem button>
                    <ListItemText primary="Login" style={{ color: "black" }} />
                  </ListItem>
                </Link>
                <Divider />
              </>
            ) : (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Signout" />
              </ListItem>
            )}
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}
