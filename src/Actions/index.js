import history from "../history";

import server from "../apis/server";

export * from "./OrderActions";
export const signIn = (user, token) => (dispatch) => {
  dispatch({
    type: "SIGN_IN",
    payload: user,
  });
  window.localStorage.setItem("hamzaFlawsToken", token);

  // setTimeout(()=>{
  // document.localStorage.removeItem("hamzaFlawsToken");
  // })
  history.push("/productList");
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
  });
  window.localStorage.removeItem("hamzaFlawsToken");
  history.push("/");
};

export const loggedInUser = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("hamzaFlawsToken");
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

export const createProduct = (data, setLoading) => async (
  dispatch,
  getState
) => {
  try {
    setLoading(true);
    const token = window.localStorage.getItem("hamzaFlawsToken");

    const response = await server.post("/admin/addProduct", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({ type: "CREATE_PRODUCT", payload: response.data.product });

    setLoading(false);
    history.push("/productList");
  } catch (e) {
    setLoading(false);
    console.log(e.message);
  }
};

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await server.get(`/shop/getProducts/`);

    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const editProduct = (id, data, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const token = window.localStorage.getItem("hamzaFlawsToken");
    const response = await server.patch(`/admin/editProduct/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "EDIT_PRODUCT", payload: response.data });

    setLoading(false);
    history.push("/productList");
  } catch (e) {
    setLoading(false);
    console.log(e.message);
  }
};

export const deleteProduct = (id, setLoading) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("hamzaFlawsToken");

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
