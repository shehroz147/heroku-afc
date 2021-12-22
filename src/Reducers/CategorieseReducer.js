const CategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return [...action.payload];
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "EDIT_CATEGORY": {
      return [...action.payload];
    }
    case "DELETE_CATEGORY": {
      const newStates = state.filter(
        (category) => category._id !== action.payload
      );
      return [...newStates];
    }
    default:
      return state;
  }
};

export default CategoriesReducer;
