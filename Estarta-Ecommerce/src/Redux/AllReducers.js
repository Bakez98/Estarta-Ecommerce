import { combineReducers } from "redux";
import authReducer from "./auth/reducer"
import ProductsReducer from "./Products/reducer"



const AllReducers = combineReducers({
    authReducer,
    ProductsReducer
 })

export default AllReducers;