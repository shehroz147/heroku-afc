const homeProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_HOME_PRODUCTS": {
      return { ...action.payload };
    }
    default:
      return state;
  }
};

export default homeProductsReducer;
