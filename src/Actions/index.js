import history from "../history";

import server from "../apis/server";

export * from "./OrderActions";
export const signIn = (user, token) => (dispatch) => {
<<<<<<< HEAD
    dispatch({
        type: "SIGN_IN",
        payload: user,
    });
    window.localStorage.setItem("userToken", token);
=======
  dispatch({
    type: "SIGN_IN",
    payload: user,
  });
  window.localStorage.setItem("peraToken", token);
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8

    // setTimeout(()=>{
    // document.localStorage.removeItem("hamzaFlawsToken");
    // })
    history.push("/productList");
};

export const signOut = () => (dispatch) => {
<<<<<<< HEAD
    dispatch({
        type: "SIGN_OUT",
    });
    window.localStorage.removeItem("kareydarToken");
    history.push("/");
};

export const loggedInUser = () => async (dispatch) => {
    try {
        const token = window.localStorage.getItem("kareydarToken");
        const { data } = await server.get(`/loggedInUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({
            type: "SIGN_IN",
            payload: data,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const createProduct = (data, url, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        const send = data
        send.imageUrl = url
        const token = window.localStorage.getItem("kareydarToken");
        await server.post("/admin/addProduct", send);
        // console.log(response);
        dispatch({ type: "CREATE_PRODUCT", payload: data });
=======
  dispatch({
    type: "SIGN_OUT",
  });
  window.localStorage.removeItem("peraToken");
  history.push("/");
};

export const loggedInUser = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("peraToken");
    const { data } = await server.get(`/loggedInUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "SIGN_IN",
      payload: data,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const createProduct = (data,url, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const send = data
    send.imageUrl = url
    const token = window.localStorage.getItem("peraToken");
      await server.post("/admin/addProduct",send);
    // console.log(response);
    dispatch({ type: "CREATE_PRODUCT", payload: data });
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8

        setLoading(false);
        history.push("/productList");
    } catch (e) {
        setLoading(false);
        console.log(e.message);
    }
};

export const fetchProducts = () => async (dispatch, getState) => {
    try {
        const { data } = await server.get(`admin/shop/getProducts`);
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
    } catch (e) {
        console.log(e.message);
    }
};

export const editProduct = (id, data, setLoading) => async (dispatch) => {
<<<<<<< HEAD
    try {
        setLoading(true);
        const token = window.localStorage.getItem("kareydarToken");
        const response = await server.patch(`/admin/editProduct/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
=======
  try {
    setLoading(true);
    const token = window.localStorage.getItem("peraToken");
    const response = await server.patch(`/admin/editProduct/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8

        dispatch({ type: "EDIT_PRODUCT", payload: response.data });

        setLoading(false);
        history.push("/productList");
    } catch (e) {
        setLoading(false);
        console.log(e.message);
    }
};

export const deleteProduct = (id, setLoading) => async (dispatch) => {
<<<<<<< HEAD
    try {
        const token = window.localStorage.getItem("kareydarToken");
=======
  try {
    const token = window.localStorage.getItem("peraToken");
>>>>>>> b0d4a3ccb0c1237767d7d7b45dcadabfa9d5c1f8

        await server.delete(`/admin/deleteProduct/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setLoading(false);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
    } catch (e) {
        setLoading(false);
        console.log(e.message);
    }
};
