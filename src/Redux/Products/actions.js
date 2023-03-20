import * as PRODUCTS_ACTIONS_CONSTANTS from "./constants"





export function FetchProducts(url) {
    return async (dispatch) => {

        dispatch({
            type:PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_LOADING
        })

        try {
         const res = await  fetch(url)
            const ProductsData = await res.json()
            dispatch({
                type:PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_SUCCESS,
                payload:ProductsData,
            })

        } catch (error) {
            dispatch({
                type:PRODUCTS_ACTIONS_CONSTANTS.PRODUCTS_ERROR,
            })
        }
    }
}