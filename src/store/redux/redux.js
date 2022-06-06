import { combineReducers } from "redux";
import  categoryReducer  from '../reducer/category';
import reducerProducts  from "../reducer/product";


export const rootReducer = combineReducers({
    Categories: categoryReducer,
    Products: reducerProducts,
    
})