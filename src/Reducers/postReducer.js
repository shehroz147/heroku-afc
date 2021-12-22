// import _ from "lodash";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...action.payload };
    case "FETCH_CATEGORY_PRODUCTS": {
      return { ...action.payload };
    }
    case "CREATE_PRODUCT": {
      state.products.push(action.payload);
      return { ...state };
    }
    case "EDIT_PRODUCT": {
      let products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      products.push(action.payload);

      return { products: products };
    }

    case "DELETE_PRODUCT": {
      const newState = state.products.filter(
        (product) => product._id !== action.payload
      );
      return { products: newState };
    }
    default:
      return state;
  }
};

export default postReducer;
