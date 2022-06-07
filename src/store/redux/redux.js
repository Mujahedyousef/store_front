import { combineReducers } from "redux";
import categoryReducer from '../reducer/category';
import reducerProducts from "../reducer/product";
import reducerCart from "../reducer/cart";

export const rootReducer = combineReducers({
    Categories: categoryReducer,
    reducerProducts: reducerProducts,
    cart: reducerCart,

})