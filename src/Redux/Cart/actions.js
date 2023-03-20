import * as CART_CONSTANTS from "./constants"


export default function AddToCart(product) {
    return (dispatch) => {

        dispatch({
            type:CART_CONSTANTS.ADD_TO_CART,
            payload:product
        })
    }
    
}