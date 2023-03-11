import * as PRODUCTS_ACTIONS_CONSTANTS from "./constants"

const initState = {
    products: [],
    loading:false,
    error:null
}


 function ProductsReducer(state = initState, action){
    switch (action.type) {
        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_LOADING:
        return {
            ...state,
            loading:true
        }
        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_ERROR:
        return {
            ...state,
            loading:false,
            error: action.payload,
        }
        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_SUCCESS:
        return {
            ...state,
            loading:false,
            products:action.payload,
        }
        default:
            return state;
    }
}

export default ProductsReducer;