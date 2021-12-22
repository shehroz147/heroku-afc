const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log(action.payload);
      return { ...state, isSignedIn: true, user: action.payload };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        user: null,
      };
    case "CHECKOUT":
      state.user.cart.items = [];
      return {
        ...state,
        // [state.user.cart.items]: [],
      };
    default:
      return state;
  }
};

export default authReducer;
