import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import CategoriesReducer from "./CategorieseReducer";
import homeProductsReducer from "./HomeProductsReducer";

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  categories: CategoriesReducer,
  homeProducts: homeProductsReducer,
});
