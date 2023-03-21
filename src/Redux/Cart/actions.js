import * as CART_CONSTANTS from "./constants"


export  function AddToCart(product) {
    return (dispatch) => {
        console.log(product)
        dispatch({
            type:CART_CONSTANTS.ADD_TO_CART,
            payload:product,
        })
    }
    
}
export function Remove_From_Cart(product) {
    return (dispatch) => {

        dispatch({
            type:CART_CONSTANTS.REMOVE_FROM_CART,
            payload:product,
        })
    }
    
}
