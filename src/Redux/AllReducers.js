import { combineReducers } from "redux";
import authReducer from "./auth/reducer"
import ProductsReducer from "./Products/reducer"
import cartReducer from "../Redux/Cart/reducer";



const AllReducers = combineReducers({
    authReducer,
    ProductsReducer,
    cartReducer,
 })

export default AllReducers;